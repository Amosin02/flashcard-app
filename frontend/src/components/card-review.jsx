import { useEffect, useState } from "react";
import CardEdit from "./card-edit";
import CardDelete from "./card-delete";

export default function CardReview(props) {
  const [isClicked, setIsClicked] = useState(true);

  function handleClickFlip() {
    setIsClicked((oldState) => !oldState);
  }

  function handleDeleteRefresh() {
    setTimeout(() => {
      // console.log("IN");
      // location.replace("/review-cards");
      location.reload();
    }, 2000);
    // location.reload();
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
            <div className="flex justify-between">
              Answer
              <div>
                <CardDelete handleDeleteRefresh={handleDeleteRefresh} />

                <CardEdit
                  question={props.question}
                  answer={props.answer}
                  handleCardEdit={props.handleCardEdit}
                />
              </div>
            </div>
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
            <div className="flex justify-between">
              Question
              <div className="flex justify-between">
                <CardDelete handleDeleteRefresh={handleDeleteRefresh} />

                <CardEdit
                  question={props.question}
                  answer={props.answer}
                  handleCardEdit={props.handleCardEdit}
                />
              </div>
            </div>
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
