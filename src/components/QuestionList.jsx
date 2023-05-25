import { useState } from "react";
import Button from "./Button";
import Heading from "./Heading";

export default ({ question, handlerBack, handlerAnswer, handlerInput }) => {
  const [userAnswer, setUserAnswer] = useState("");

  return (
    <div className="wrapper">
      <Button handler={handlerBack} label={"Back"} />
      {question ? (
        <Heading label={question} />
      ) : (
        <Heading label={"LOADING DATA..."} />
      )}
      <input
        onChange={(e) => setUserAnswer(e.target.value)}
        className={`inputDefault ${handlerInput && "inputError"}`}
      />
      <Button handler={() => handlerAnswer(userAnswer)} label={"Submit"} />
    </div>
  );
};
