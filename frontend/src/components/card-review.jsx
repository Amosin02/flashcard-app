import { useEffect, useState } from "react";
import CardEdit from "./card-edit";

export default function CardReview(props) {
  const [isClicked, setIsClicked] = useState(true);

  function handleClickFlip() {
    setIsClicked((oldState) => !oldState);
  }

  useEffect(() => {
    setIsClicked(true);
  }, [props.faceDown]);

  return (
    <>
      {/* if you're gonna edit this, edit also below because I repeat stuff */}
      {!isClicked && (
        <>
          <div className="px-4 pt-4">
            <p className="flex justify-between">
              Answer
              <CardEdit
                question={props.question}
                answer={props.answer}
                handleCardEdit={props.handleCardEdit}
              />
            </p>
            <hr className="mt-4 border-t border-black" />
          </div>
          <div
            className="flex-1 content-center overflow-auto p-4 hover:cursor-pointer"
            onClick={handleClickFlip}
          >
            <h1 className="text-center text-lg font-bold tracking-wide">
              {props.answer}
            </h1>
          </div>
        </>
      )}

      {isClicked && (
        <>
          <div className="px-4 pt-4">
            <p className="flex justify-between">
              Question
              <CardEdit
                question={props.question}
                answer={props.answer}
                handleCardEdit={props.handleCardEdit}
              />
            </p>
            <hr className="mt-4 border-t border-black" />
          </div>
          <div
            className="flex-1 content-center overflow-auto p-4 hover:cursor-pointer"
            onClick={handleClickFlip}
          >
            <h1 className="text-center text-lg font-bold tracking-wide">
              {props.question}
            </h1>
          </div>
        </>
      )}
    </>
  );
}
