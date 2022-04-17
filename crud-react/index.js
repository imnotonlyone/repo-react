import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
//js dasar ----
// import Variabel from "./Variabel";
// import StateProps from "./StateProps";
// import Map from "./Map";
// import Lifecycle from "./Lifecycle";
//----
import "bootstrap/dist/css/bootstrap.min.css";
import Crud from "./crud";

ReactDOM.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>,
  document.getElementById("root")
);
