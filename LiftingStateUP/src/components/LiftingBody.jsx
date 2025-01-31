import React, { useState } from "react";
import InputPart from "./InputPart";
import DisplayPart from "./DisplayPart";

const LiftingBody = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <InputPart inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayPart inputValue={inputValue} />
    </>
  );
};

export default LiftingBody;
