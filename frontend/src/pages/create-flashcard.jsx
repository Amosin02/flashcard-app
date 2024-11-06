import { useState } from "react";
import { _ } from "lodash";
import CardInput from "../components/card-input";
import Sidebar from "../components/sidebar";
import { Link } from "react-router-dom";

export default function CreateFlashcard(props) {
  const [cardCount, setCardCount] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);

  function handleCardAdd(e) {
    e.preventDefault();
    setCardCount((oldState) => [...oldState, { id: oldState.length + 1 }]);
  }

  function handleDeleteClick(id) {
    setCardCount(cardCount.filter((card) => card.id !== id));
  }

  return (
    <>
      <Sidebar />

      <section className="ml-36 mr-72 min-w-96 p-6">
        <h1 className="mb-4 text-2xl font-bold tracking-wide">Create Page</h1>
        <form
          method="post"
          onSubmit={props.handleSubmit}
          className="rounded-md bg-saitama-white p-4 pr-10"
        >
          <div className="mb-3">
            <label
              htmlFor="subject"
              className="mr-2 text-lg font-bold tracking-wide"
            >
              Title
            </label>
            <input
              className="rounded-sm border border-saitama-gold bg-saitama-yellow"
              id="subject"
              name="subject"
              type="text"
            />
          </div>

          {cardCount.map((item, number) => (
            <div
              className="my-2 flex flex-col rounded-md border border-saitama-gold bg-saitama-yellow"
              key={`${item.id}-${number}`}
            >
              <CardInput
                handleDeleteClick={() => handleDeleteClick(item.id)}
                number={number}
              />
            </div>
          ))}
          <button
            onClick={handleCardAdd}
            className="mb-2 h-16 w-full self-center rounded-lg bg-saitama-red px-5 py-2.5 text-sm font-medium text-white hover:bg-saitama-darker-red focus:outline-none active:bg-saitama-darker-red"
          >
            + Add Card
          </button>

          <button className="mb-2 rounded-lg bg-saitama-red px-5 py-2.5 text-sm font-medium text-white hover:bg-saitama-darker-red focus:outline-none active:bg-saitama-darker-red">
            Create Flashcard
          </button>
        </form>
      </section>
    </>
  );
}
