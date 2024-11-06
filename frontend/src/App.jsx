import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CreateFlashcard from "./pages/create-flashcard";
import axios from "axios";
import WelcomePage from "./pages/welcome-page";
import ReviewPage from "./pages/review-page";

function App() {
  const [flashcardData, setFlashcardData] = useState();
  const [flashcardCards, setFlashcardCards] = useState();
  const [selectedSetID, setSelectedSetID] = useState();
  const [update, setUpdate] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getFlashcards = async () => {
      await axios
        .get("http://localhost:3001/api/flashcards")
        .then((res) => setFlashcardData(res.data.data));
    };

    getFlashcards();
  }, [update]);

  async function handleSubmit(e) {
    e.preventDefault();

    const title = document.getElementById("subject").value;
    const formQuestionList = document.querySelectorAll("#question");
    const formAnsList = document.querySelectorAll("#answer");

    let deck = [];

    for (let i = 0; i < formAnsList.length; i++) {
      const question = formQuestionList[i].value;
      const answer = formAnsList[i].value;
      if (question !== "" || answer !== "") {
        const card = {
          question: question,
          answer: answer,
        };
        deck.push(card);
      }
      navigate("/");
    }

    const flashcardData = {
      subject: title,
      cards: deck,
    };

    await axios.post("http://localhost:3001/api/flashcards", flashcardData);
  }

  function getId(id) {
    localStorage.clear();
    flashcardData.map((el) => {
      if (el._id === id) {
        setFlashcardCards(el.cards);
        setSelectedSetID(id);
        localStorage.setItem("cardSubject", JSON.stringify(el.subject));
        localStorage.setItem("cardData", JSON.stringify(el.cards));
        localStorage.setItem("setID", JSON.stringify(id));
      }
    });
  }

  return (
    <div style={{ backgroundColor: "#e7bf5c", minHeight: "100vh" }}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <WelcomePage
              flashcardData={flashcardData}
              getId={getId}
              selectedSetID={selectedSetID}
            />
          }
        />
        <Route
          exact
          path="create-flashcards"
          element={<CreateFlashcard handleSubmit={handleSubmit} />}
        />
        <Route
          exact
          path="review-cards"
          element={
            <ReviewPage
              selectedSetID={selectedSetID}
              flashcardData={flashcardData}
              setUpdate={setUpdate}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
