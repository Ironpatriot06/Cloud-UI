import React from "react";
import { useNavigate } from "react-router-dom";
import './Card.css';

function CardOne() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleBackToHome = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="card-one-container">
      <h1 className="card-title">Card One</h1>
      <p className="card-description">Details or content for Card One goes here.</p>
      <button
        onClick={handleBackToHome}
        className="back-button"
      >
        Back to Home
      </button>
    </div>
  );
}

export default CardOne;
