import "./App.css";

import { useState, useEffect } from "react";
import axios from "axios";

import CATEGORIES from "./constants/CATEGORIES";
import API_KEY from "./constants/API_KEY";
import URL from "./constants/URL";
import Heading from "./components/Heading";
import CategoryList from "./components/CategoryList";
import QuestionList from "./components/QuestionList";

const App = () => {
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [points, setPoints] = useState(0);

  useEffect(() => {
    category && fetchQuestion();
  }, [category]);

  const handlePickCategory = (category) => {
    setCategory(category);
  };

  const fetchQuestion = async () => {
    try {
      if (category) {
        const {
          data: [{ question, answer }],
        } = await axios.get(`${URL}?category=${category}`, {
          headers: { "X-Api-Key": API_KEY },
        });
        setQuestion(question);
        setAnswer(answer);
      }
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  };

  const handleBack = () => {
    setCategory("");
    setQuestion("");
    setAnswer("");
  };

  const handlePoints = () => {
    setPoints(points + 1);
  };

  const handleAnswer = (userAnswer) => {
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
      handleBack();
      handlePoints();
    }
  };

  return (
    <>
      <div className="wrapper">
        <Heading label={"Web 2.5 Trivia"} />
        <Heading label={`Points: ${points}`} />
        {category ? (
          <QuestionList
            question={question}
            handlerBack={handleBack}
            handlerAnswer={handleAnswer}
          />
        ) : (
          <CategoryList
            categories={CATEGORIES}
            handlerPick={handlePickCategory}
          />
        )}
      </div>
    </>
  );
};

export default App;
