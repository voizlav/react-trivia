import { useState } from "react";
import { CATEGORIES } from "./constants/categories";
import { API_KEY } from "./constants/api";
import { URL } from "./constants/url";
import "./App.css";

function App() {
  console.log(URL);
  return (
    <>
      <h2>Web 2.5 Trivia</h2>
      {CATEGORIES.map((category) => {
        return <button key={category}>{category}</button>;
      })}
    </>
  );
}

export default App;
