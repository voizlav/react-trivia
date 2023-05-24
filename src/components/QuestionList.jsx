import { useState } from "react";
import QButton from "./QButton";
import Heading from "./Heading";

export default ({ question, handlerBack, handlerAnswer }) => {
  const [userAnswer, setUserAnswer] = useState("");
  console.log(userAnswer);
  return (
    <div className="wrapper">
      <QButton handler={handlerBack} label={"Back"} />
      {question ? (
        <Heading label={question} />
      ) : (
        <Heading label={"LOADING DATA..."} />
      )}
      <input onChange={(e) => setUserAnswer(e.target.value)} />
      <QButton handler={handlerAnswer} label={"Submit"} />
    </div>
  );
};
