import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sets(props) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-lg font-bold tracking-wide">{props.subject}</h1>
        <p className="text-sm font-light">{props.cards.length} cards</p>
      </div>
      <span onClick={props.deleteSet} className="p-1">
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </div>
  );
}
