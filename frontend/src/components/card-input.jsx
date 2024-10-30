import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CardInput(props) {
  return (
    <>
      <header className="border-saitama-gold bg-saitama-red flex justify-between border-b p-1 text-white">
        <span>{props.number + 1}</span>
        <span onClick={props.handleDeleteClick} className="cursor-pointer">
          <FontAwesomeIcon icon={faTrash} />
        </span>
      </header>
      <section className="p-3">
        <label className="text-md font-normal" htmlFor={"question"}>
          Question:
        </label>
        <textarea
          id={"question"}
          name="question"
          className="border-saitama-gold bg-saitama-yellow block w-full resize-none rounded-md border p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <label className="text-md font-normal" htmlFor={"answer"}>
          Answer:
        </label>
        <textarea
          id={"answer"}
          name="answer"
          className="border-saitama-gold bg-saitama-yellow block w-full resize-none rounded-md border p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </section>
    </>
  );
}
