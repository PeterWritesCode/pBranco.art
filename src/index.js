// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Art from "./Art";
import Not from "./Not";
import { HashRouter, Routes, Route } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
       <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/art" element={<Art />} />
        <Route path="/miniatures" element={<Not />}/>
        <Route path="/commissions" element={<Not />}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);