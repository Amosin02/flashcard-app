import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function CardEdit(props) {
  return (
    <Popup
      trigger={
        <button>
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
            className="absolute -right-4 -top-4 rounded-full border border-gray-300 bg-white px-3 py-1 hover:bg-slate-200"
          >
            &times;
          </button>
          <h1 className="py-2 text-lg font-medium">Edit Card</h1>

          <h3 className="-mb-2 text-xs font-extralight">Question</h3>
          <textarea
            name="question"
            id="question"
            defaultValue={props.question}
            className="h-10 resize-none border-b-4 border-b-slate-500 focus:border-b-yellow-300"
          ></textarea>

          <h3 className="-mb-2 text-xs font-extralight">Answer</h3>
          <textarea
            name="answer"
            id="answer"
            defaultValue={props.answer}
            className="h-10 resize-none border-b-4 border-b-slate-500 focus:border-b-yellow-300"
          ></textarea>

          <Link
            to={"/"}
            className="mt-auto h-11 border-2 text-center hover:bg-slate-200"
          >
            <button onClick={props.handleCardEdit} className="align-middle">
              Save
            </button>
          </Link>

          <button className="h-11 border-2 hover:bg-slate-200" onClick={close}>
            Cancel
          </button>
        </div>
      )}
    </Popup>
  );
}
