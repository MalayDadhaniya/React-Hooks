import React from "react";

const InputPart = ({ inputValue, setInputValue }) => {
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default InputPart;
