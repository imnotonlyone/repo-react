import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [nama, setNama] = useState("");

  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const listItems = number.map((number) => <li>{number}</li>);

  let nambah = () => {
    setCount(count + 1);
  };

  let kliker = (e) => {
    const newValue = e.target.value;
    setNama(newValue);
  };

  return (
    <div>
      {count}
      <h1>Hello world</h1>
      <input type="text" onChange={kliker} />
      {/* <button onClick={nambah}>nambah</button> */}
      {listItems}
    </div>
  );
}
export default App;
