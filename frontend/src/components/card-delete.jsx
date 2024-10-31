import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function CardDelete() {
  async function handleDeleteCard() {
    const idxOfCard = JSON.parse(localStorage.getItem("idx"));
    const cards = JSON.parse(localStorage.getItem("cardData"));

    const idOfCard = findIdOfCard(idxOfCard, cards);
    const setID = JSON.parse(localStorage.getItem("setID"));

    // deleteCard(setID, idOfCard);

    try {
      await axios.delete(
        `http://localhost:3001/api/flashcards/${setID}/cards/${idOfCard}`,
      );
    } catch (error) {
      console.log(error);
    }
    location.reload();

    setTimeout(() => {
      location.reload();
    }, 2000);
  }

  function findIdOfCard(index, cards) {
    const cardID = cards[index]._id;
    return cardID;
  }

  return (
    <Popup
      trigger={
        <button className="rounded-full px-2 py-1 hover:bg-saitama-yellow">
          {" "}
          <FontAwesomeIcon icon={faTrash} />{" "}
        </button>
      }
      modal
      nestedd
    >
      {(close) => (
        <div className="m-2 my-4 flex h-44 flex-col gap-3 rounded-md">
          <h1 className="py-2 text-center text-lg font-medium">
            Delete This Card?
          </h1>

          <button
            className="h-11 rounded-md border border-saitama-red bg-saitama-red text-white hover:bg-saitama-darker-red"
            onClick={handleDeleteCard}
          >
            Delete
          </button>
          <button
            className="h-11 rounded-md border border-saitama-red bg-saitama-red text-white hover:bg-saitama-darker-red"
            onClick={close}
          >
            Cancel
          </button>
        </div>
      )}
    </Popup>
  );
}
