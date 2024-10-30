import { useState } from "react";
import { _ } from "lodash";
import CardInput from "../components/card-input";
import Sidebar from "../components/sidebar";

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
          className="bg-saitama-white rounded-md p-4 pr-10"
        >
          <div className="mb-3">
            <label
              htmlFor="subject"
              className="mr-2 text-lg font-bold tracking-wide"
            >
              Title
            </label>
            <input
              className="bg-saitama-yellow border-saitama-gold rounded-sm border"
              id="subject"
              name="subject"
              type="text"
            />
          </div>

          {cardCount.map((item, number) => (
            <div
              className="bg-saitama-yellow border-saitama-gold my-2 flex flex-col rounded-md border"
              key={`${item.id}-${number}`}
            >
              <CardInput
                handleDeleteClick={() => handleDeleteClick(item.id)}
                number={number}
              />
            </div>
          ))}

          {/* <div className="mt-2 flex justify-center"> */}
          <button
            onClick={handleCardAdd}
            className="bg-saitama-red hover:bg-saitama-darker-red active:bg-saitama-darker-red mb-2 h-16 w-full self-center rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none"
          >
            + Add Card
          </button>
          {/* </div> */}
          <button className="bg-saitama-red hover:bg-saitama-darker-red active:bg-saitama-darker-red mb-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none">
            Create Flashcard
          </button>
        </form>
      </section>
    </>
  );
}
