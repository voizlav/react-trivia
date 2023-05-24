import { useState } from "react";
import QButton from "./QButton";
import Heading from "./Heading";

export default ({ question, handlerBack, handlerAnswer }) => {
  const [userAnswer, setUserAnswer] = useState("");

  return (
    <div className="wrapper">
      <QButton handler={handlerBack} label={"Back"} />
      {question ? (
        <Heading label={question} />
      ) : (
        <Heading label={"LOADING DATA..."} />
      )}
      <input />
      <QButton handler={handlerAnswer} label={"Submit"} />
    </div>
  );
};
