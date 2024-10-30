import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="wid-24 border-saitama-gold fixed left-0 top-0 z-10 flex h-full min-w-24 flex-col overflow-x-hidden border-r p-6 px-2 shadow-md">
      <Link to={"/"}>
        <button className="dark:bg-purple-600dark:hover:bg-purple-700 bg-saitama-red hover:bg-saitama-darker-red active:bg-saitama-darker-red dark:focus:ring-saitama-darker-red mb-2 w-6/12 min-w-24 rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none">
          Open
        </button>
      </Link>

      <Link to={"/create-flashcards"}>
        <input
          type="button"
          value="Create"
          className="dark:bg-purple-600dark:hover:bg-purple-700 bg-saitama-red hover:bg-saitama-darker-red active:bg-saitama-darker-red dark:focus:ring-saitama-darker-red mb-2 w-6/12 min-w-24 rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none"
        />
      </Link>
    </div>
  );
}
