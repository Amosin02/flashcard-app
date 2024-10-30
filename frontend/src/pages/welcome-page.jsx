import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sets from "../components/sets";
import Sidebar from "../components/sidebar";
import { Link } from "react-router-dom";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function WelcomePage(props) {
  const cardDataArr = props.flashcardData;

  function deleteSet(e) {
    // e.stopImmediatePropagation();
    e.preventDefault();
    e.stopPropagation();
    console.log("works");

    // add pop up too
  }

  return (
    <>
      <Sidebar />

      <section className="ml-36 mr-72 min-w-96 p-6">
        <h1 className="mb-4 text-2xl font-bold tracking-wide">
          Your Flashcards
        </h1>

        <div className="bg-saitama-white rounded-md p-4 pr-10">
          {cardDataArr &&
            cardDataArr.map((el) => (
              <Link key={el._id} to={"/review-cards"}>
                <div
                  className="border-saitama-gold bg-saitama-yellow hover:bg-saitama-darker-yellow m-2 my-4 rounded-md border p-4 shadow-md hover:cursor-pointer"
                  onClick={() => props.getId(el._id)}
                >
                  <Sets
                    subject={el.subject}
                    cards={el.cards}
                    deleteSet={deleteSet}
                  />
                </div>
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}
