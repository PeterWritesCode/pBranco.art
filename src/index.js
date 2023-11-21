// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Art from "./Art";
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/art" element={<Art />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);