import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  function count() {
    setCounter(counter + 1);
  }

  return (
    <div>
      {counter}
      <button onClick={count}>incerement</button>
    </div>
  );
};

export default App;
