import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/components /Home";
import CardThree from "../src/components /CardThree";
import CardOne from "../src/components /CardOne";
import CardTwo from "../src/components /CardTwo";
import CardFour from "../src/components /CardFour";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card-one" element={<CardOne />} />
      <Route path="/card-two" element={<CardTwo />} />
      <Route path="/card-three" element={<CardThree />} />
      <Route path="/card-four" element={<CardFour />} />
    </Routes>
  );
}

export default App;
