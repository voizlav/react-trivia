import "./App.css";

import { useState, useEffect } from "react";
import axios from "axios";

import CATEGORIES from "./constants/CATEGORIES";
import API_KEY from "./constants/API_KEY";
import URL from "./constants/URL";
import Heading from "./components/Heading";
import CategoryList from "./components/CategoryList";

const App = () => {
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

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
    setCorrectAnswer("");
  };

  const handleAnswer = () => {};

  return (
    <>
      <div className="wrapper">
        <Heading label={"Web 2.5 Trivia"} />
        {category ? (
          <QuestionList
            question={question}
            handlerBack={handleBack}
            handlerAnswer={handleAnswer}
          />
        ) : (
          <CategoryList categories={CATEGORIES} handler={handlePickCategory} />
        )}
      </div>
    </>
  );
};

export default App;
