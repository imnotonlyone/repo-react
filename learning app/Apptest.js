import React, { useState } from "react";

// membuat counter
const Apptest = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("Ilham");
  const increment = () => {
    setCounter(counter + 1);
  };

  let onchange = (e) => {
    let newValue = e.target.value;
    setInputValue(newValue);
  };

  return (
    <div className="text-center">
      {counter} <button onClick={increment}>Klik me</button>
      <br />
      <input type="text" placeholder="enter something" onChange={onchange} />
      <br />
      {inputValue}
    </div>
  );
};

export default Apptest;
