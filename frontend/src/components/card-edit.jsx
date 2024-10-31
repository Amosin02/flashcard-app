import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function CardEdit(props) {
  return (
    <Popup
      trigger={
        <button className="rounded-full px-2 py-1 hover:bg-saitama-yellow">
          {" "}
          <FontAwesomeIcon icon={faPen} />{" "}
        </button>
      }
      modal
      nestedd
    >
      {(close) => (
        <div className="m-2 my-4 flex h-96 flex-col gap-3">
          <button
            onClick={close}
            className="absolute -right-4 -top-4 rounded-full border border-saitama-red bg-saitama-red px-3 py-1 text-white hover:border-saitama-darker-red hover:bg-saitama-darker-red"
          >
            &times;
          </button>
          <h1 className="py-2 text-lg font-medium">Edit Card</h1>

          <h3 className="-mb-2 text-xs font-extralight">Question</h3>
          <textarea
            name="question"
            id="question"
            defaultValue={props.question}
            className="h-10 resize-none border-b-4 border-b-slate-500 focus:border-b-saitama-yellow"
          ></textarea>

          <h3 className="-mb-2 text-xs font-extralight">Answer</h3>
          <textarea
            name="answer"
            id="answer"
            defaultValue={props.answer}
            className="h-10 resize-none border-b-4 border-b-slate-500 focus:border-b-saitama-yellow"
          ></textarea>

          <Link
            to={"/"}
            className="mt-auto h-11 rounded-md border-2 border-saitama-red bg-saitama-red text-center text-white hover:border-saitama-darker-red hover:bg-saitama-darker-red"
          >
            <button
              onClick={props.handleCardEdit}
              className="flex h-full w-full items-center justify-center"
            >
              Save
            </button>
          </Link>

          <button
            className="h-11 rounded-md border-2 border-saitama-red bg-saitama-red text-white hover:border-saitama-darker-red hover:bg-saitama-darker-red"
            onClick={close}
          >
            Cancel
          </button>
        </div>
      )}
    </Popup>
  );
}
