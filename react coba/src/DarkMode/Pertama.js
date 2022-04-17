import React from "react";
import { createContext } from "react";
import Form from "./Form";
import Style from "./Style.css";

import { createContext } from "react";

export const ThemeContext = createContext("null");

function Pertama() {
  const { theme, setTheme } = useState("light");
  const toogleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <div className="App" id="light">
        <Form />
      </div>
    </ThemeContext.Provider>
  );
}

export default Pertama;
