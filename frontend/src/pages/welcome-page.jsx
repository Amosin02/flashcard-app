import Sets from "../components/sets";
import Sidebar from "../components/sidebar";
import { Link } from "react-router-dom";
import axios from "axios";

export default function WelcomePage(props) {
  const cardDataArr = props.flashcardData;

  async function deleteSet(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("works");

    try {
      await axios.delete(
        `http://localhost:3001/api/flashcards/${props.selectedSetID}`,
      );
    } catch (error) {
      console.log(error);
    }

    location.reload();
  }

  return (
    <>
      <Sidebar />

      <section className="ml-36 mr-72 min-w-96 p-6">
        <h1 className="mb-4 text-2xl font-bold tracking-wide">
          Your Flashcards
        </h1>

        <div className="rounded-md bg-saitama-white p-4 pr-10">
          {cardDataArr &&
            cardDataArr.map((el) => (
              <Link key={el._id} to={"/review-cards"}>
                <div
                  className="m-2 my-4 rounded-md border border-saitama-gold bg-saitama-yellow p-4 shadow-md hover:cursor-pointer hover:bg-saitama-darker-yellow"
                  onMouseOver={() => props.getId(el._id)}
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
