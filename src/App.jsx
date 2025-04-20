import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/components /Home";
import CardThree from "../src/components /CardThree";
import CardOne from "../src/components /CardOne";
import CardTwo from "../src/components /CardTwo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card1" element={<CardOne />} />
      <Route path="/card2" element={<CardTwo />} />
      <Route path="/card3" element={<CardThree />} />
    </Routes>
  );
}

export default App;
