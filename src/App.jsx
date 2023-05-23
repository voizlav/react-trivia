import { useState } from "react";

import CATEGORIES from "./constants/CATEGORIES";
import API_KEY from "./constants/API_KEY";
import URL from "./constants/URL";

import Button from "./components/Button";
import Heading from "./components/Heading";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Heading label={"Web 2.5 Trivia"} />
        {CATEGORIES.map((category) => {
          return <Button key={category} label={category} />;
        })}
      </div>
    </>
  );
};

export default App;
