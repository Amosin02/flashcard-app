import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import CardReview from "../components/card-review";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ReviewPage(props) {
  const [cardSet, setCardSet] = useState([]);
  const [cardCount, setCardCount] = useState(0);
  const [currentCard, setCurrentCard] = useState([]);
  const [currentCardID, setCurrentCardID] = useState();
  const [cardSubject, setCardSubject] = useState(
    JSON.parse(localStorage.getItem("cardSubject")),
  );
  const [dataHolder, setDataHolder] = useState();
  const [setId, setSetId] = useState(JSON.parse(localStorage.getItem("setID")));

  let numCount = cardCount;

  useEffect(() => {
    const getFlashcards = async () => {
      await axios
        .get("http://localhost:3001/api/flashcards")
        .then((res) => setDataHolder(res.data.data));
    };

    getFlashcards();
  }, []);

  useEffect(() => {
    function getCards() {
      if (dataHolder) {
        const here = dataHolder.find((el) => el._id === setId);
        localStorage.setItem("cardData", JSON.stringify(here.cards));
      }
    }

    getCards();
  }, [dataHolder]);

  function handleCardChangePlus() {
    if (cardCount === cardSet.length - 1) {
      setCardCount(cardSet.length - 1);
      numCount = cardSet.length - 1;
    } else {
      setCardCount(cardCount + 1);
      numCount++;
    }
    changeCard();
    indexToStorage();
  }

  function handleCardChangeMinus() {
    if (cardCount === 0) {
      setCardCount(0);
      numCount = 0;
    } else {
      setCardCount(cardCount - 1);
      numCount--;
    }
    changeCard();
    indexToStorage();
  }

  function changeCard() {
    setCurrentCard(cardSet[numCount]);
  }

  function getFromStorage() {
    const holder = JSON.parse(localStorage.getItem("cardData"));
    const holderID = JSON.parse(localStorage.getItem("setID"));
    setCurrentCard(holder[0]);
    setCardSet(holder);

    setCurrentCardID(holderID);
  }

  function indexToStorage() {
    localStorage.setItem("idx", JSON.stringify(numCount));
  }

  if (!cardSet.length) {
    getFromStorage();
    indexToStorage();
  }

  async function handleCardEdit() {
    const editedQuestion = document.getElementById("question").value;
    const editedAnswer = document.getElementById("answer").value;

    const updatedCard = {
      question: editedQuestion,
      answer: editedAnswer,
    };

    try {
      await axios.put(
        `http://localhost:3001/api/flashcards/${currentCardID}/cards/${currentCard._id}`,
        updatedCard,
      );
      props.setUpdate((oldState) => !oldState);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Sidebar />

      <section className="ml-36 mr-72 min-w-96 p-6">
        <div className="flex content-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">Review</h1>

          <Link to={"/"}>
            <span className="self-center rounded-full bg-saitama-red px-4 py-3 text-lg text-white hover:cursor-pointer hover:bg-saitama-darker-red">
              &#8592;
            </span>
          </Link>
        </div>

        <div className="mt-4 rounded-md bg-saitama-white p-4">
          <div className="flex flex-col justify-center">
            <div className="mt-2 flex justify-between">
              <h2>{cardSubject}</h2>
              <h2 className="float-right">
                {numCount + 1} / {cardSet.length}
              </h2>
            </div>

            <div className="m-2 my-4 flex h-96 flex-col rounded-md border border-black shadow-md">
              <CardReview
                question={currentCard.question}
                answer={currentCard.answer}
                faceDown={cardCount}
                handleCardEdit={handleCardEdit}
              />
            </div>

            <div className="flex justify-center gap-2">
              <span
                onClick={handleCardChangeMinus}
                className="rounded-full bg-saitama-red px-5 py-2 text-lg text-white hover:cursor-pointer hover:bg-saitama-darker-red"
              >
                &#8249;
              </span>

              <span
                onClick={handleCardChangePlus}
                className="rounded-full bg-saitama-red px-5 py-2 text-lg text-white hover:cursor-pointer hover:bg-saitama-darker-red"
              >
                &#8250;
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
