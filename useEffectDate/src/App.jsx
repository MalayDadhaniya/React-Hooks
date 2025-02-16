import React, { useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const updatedDate = new Date().toLocaleTimeString();
      setTime(updatedDate);
    }, 1000);
  }, []);

  useEffect(() => {
    console.log(new Date());
  }, []);

  return (
    <div>
      <h1>Real Time : </h1>
      <br />
      <h4>{time}</h4>
    </div>
  );
};

export default App;
