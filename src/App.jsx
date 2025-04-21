import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/components /Home";
import CardThree from "../src/components /CardThree";
import CardOne from "../src/components /CardOne";
import CardTwo from "../src/components /CardTwo";
import CardFour from "../src/components /CardFour";
import Auth from "../src/components /Auth"
import FileUpload from "../src/components /FileUpload";
import TerminalUI from "./components /TerminalUI";
import Collaborate from "./components /Collaborate";
import QRCodeDownload from "..//src/components /QRCodeDownload";
import ProtectedRoute from "./components /ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login success
  const handleLoginSuccess = () => {
    setIsAuthenticated(true); // Set isAuthenticated to true on successful login
  };
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/card-one" element={<CardOne />} />
      <Route path="/card-two" element={<CardTwo />} />
      <Route path="/card-three" element={<CardThree />} />
      <Route path="/card-four" element={<CardFour />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/file-upload" element={<FileUpload />} />
      <Route path="/terminal-ui" element={<TerminalUI />} />
      <Route path="/home" element={<Home />} />
      <Route path="/collaborate" element={<Collaborate />} />
      <Route path="/qr-code-download" element={<QRCodeDownload />} />
      <Route path="/home" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Home />
          </ProtectedRoute>
        } />
    </Routes>
  );
}

export default App;
