import React, { useState } from "react";

const Apptest2 = () => {
  let [counter, setCounter] = useState(0);
  let [counter2, setCounter2] = useState(0);

  let kliker = () => {
    setCounter(counter + 1);
    if (counter === 10) {
      winner();
    }
  };

  let kliker2 = () => {
    setCounter2(counter2 + 1);
    if (counter2 === 10) {
      winner();
      counter2 = 0;
    }
  };

  let winner = () => {
    alert(`you are winner`);
    counter();
  };

  return (
    <div className="text-center col-md-5">
      <p>tim A : {counter}</p>
      <button onClick={kliker}>DEAL!!!!</button>
      <p>tim B : {counter2}</p>
      <button onClick={kliker2}>DEAL!!!!</button>
    </div>
  );
};

export default Apptest2;
