import React from "react";

const harga = 3000;

const Variabel = () => {
  return (
    <div>
      <h2>Harga : {harga}</h2>
      <button>+</button>
      <button>-</button>
      <button>x</button>
      <button>:</button>
    </div>
  );
};

export default Variabel;
