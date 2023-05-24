import "./App.css";

import { useState, useEffect } from "react";
import CATEGORIES from "./constants/CATEGORIES";
import API_KEY from "./constants/API_KEY";
import URL from "./constants/URL";
import Heading from "./components/Heading";
import CategoryList from "./components/CategoryList";

const App = () => {
  const [category, setCategory] = useState("");

  useEffect(() => {
    category && console.log(category);
  }, [category]);

  const handlePickCategory = (category) => {
    setCategory(category);
  };

  return (
    <>
      <div className="wrapper">
        <Heading label={"Web 2.5 Trivia"} />
        <CategoryList categories={CATEGORIES} handler={handlePickCategory} />
      </div>
    </>
  );
};

export default App;
