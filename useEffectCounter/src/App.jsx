import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={() => setCount(count + 1)}>Enter ++</button>
      <h4>{count}</h4>
    </div>
  );
};

export default App;
