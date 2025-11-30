// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import PetInfo from "./pages/PetInfo";
import PetDetails from "./components/PetDetails";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="about" element={<PetInfo />} />
      <Route path="/item/:id" element={<PetInfo />} />
    </Routes>
  </BrowserRouter>,
);
