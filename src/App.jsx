import { useState } from "react";
import CATEGORIES from "./constants/categories";
import { API_KEY } from "./constants/api";
import URL from "./constants/URL";
import Button from "./components/Button";
import "./App.css";

function App() {
  console.log(URL);
  return (
    <>
      <div className="wrapper">
        <h2>Web 2.5 Trivia</h2>
        {CATEGORIES.map((category) => {
          return <Button key={category} label={category} />;
        })}
      </div>
    </>
  );
}

export default App;
