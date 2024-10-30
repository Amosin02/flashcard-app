const mongoose = require('mongoose');

// const flashcardSchema = mongoose.Schema({
//   subject: {
//     type: String,
//     required: true,
//   },
//   question: {
//     type: String,
//     required: true,
//   },
//   answer: {
//     type: String,
//     required: true,
//   },
// });

const cardSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const testSchema = mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  cards: [cardSchema],
});

// const Flashcard = mongoose.model('Flashcard', flashcardSchema);
const Flashcard = mongoose.model('Flashcard', testSchema);
const Card = mongoose.model('Card', cardSchema);

module.exports = { Flashcard, Card };

// functionality where if i'm getting it right every time the question
// appears, show it less and show the questions I don't get that often
