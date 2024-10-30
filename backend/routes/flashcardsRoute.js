const express = require('express');
const { Flashcard, Card } = require('../models/flashcard.model');
const { default: mongoose } = require('mongoose');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const flashcards = await Flashcard.find({});
    res.status(200).json({
      count: flashcards.length,
      data: flashcards,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// add flashcard
router.post('/', async (req, res) => {
  try {
    const newFlashcard = {
      subject: req.body.subject,
      cards: req.body.cards,
    };

    const flashcards = await Flashcard.create(newFlashcard);
    res.status(201).send(flashcards);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// add cards to existing flashcards
router.post('/cards/:id', async (req, res) => {
  try {
    const card = {
      question: req.body.question,
      answer: req.body.answer,
    };

    const { id } = req.params;

    const updateCard = await Flashcard.findByIdAndUpdate(
      id,
      { $push: { cards: card } },
      { new: true }
    );

    if (!updateCard) {
      return res.status(404).json({ message: 'Flashcard not found' });
    }

    return res.status(200).send({ message: 'Card successfuly added' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// edit the question and answer of a card
router.put('/:flashcardID/cards/:cardID', async (req, res) => {
  const { flashcardID, cardID } = req.params;
  const { question, answer } = req.body;

  try {
    if (!question || !answer) {
      return res
        .status(400)
        .send({ message: 'Edit either the question or answer' });
    }

    const flashcardObjID = new mongoose.Types.ObjectId(flashcardID);
    const cardObjID = new mongoose.Types.ObjectId(cardID);

    const result = await Flashcard.findOneAndUpdate(
      { _id: flashcardObjID, 'cards._id': cardObjID },
      { $set: { 'cards.$.question': question, 'cards.$.answer': answer } },
      { new: true }
    );
    // console.log(flashcardID, cardID);

    if (!result) {
      return res.status(404).json({ message: 'Question not found' });
    }

    return res.status(200).send({ message: 'Flashcard successfuly edited' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// delete the whole flashcard of a subject
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const toBeDeleted = await Flashcard.findByIdAndDelete(id);

    if (!toBeDeleted) {
      return res.status(404).send({ message: 'Flashcard not found' });
    }

    return res.status(204).send({ message: 'Successfuly deleted flashcard' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// delete a certain card in the flashcard

module.exports = router;
