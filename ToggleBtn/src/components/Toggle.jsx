import React, { useState } from "react";
import style from "./Toggle.module.css";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);
  const display = `${isOn == true ? "on" : "off"}`;
  const fullContainer = { backgroundColor: `${isOn == true ? "green" : " "} ` };
  const innerCss = `${style.innerContainer} ${
    isOn == true ? style.on : style.off
  }`;

  const hendleOnClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={style.container}
      onClick={hendleOnClick}
      style={fullContainer}
    >
      <div className={innerCss} style={fullContainer}>
        <span className={style.text}>{display}</span>
      </div>
    </div>
  );
};

export default Toggle;
