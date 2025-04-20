import React from "react";
import { useNavigate } from "react-router-dom";
import './Card.css';

function CardOne() {

  const handleGoToExternalSite = () => {
    window.location.href = "https://street-sneaks.vercel.app";
  };
  

  // const navigate = useNavigate(); 

  // const handleBackToHome = () => {
  //   navigate("https://street-sneaks.vercel.app"); 
  // };

  return (
    <div className="card-one-container">
      <h1 className="card-title">Card One</h1>
      <p className="card-description">Click below to visit our e-commerce site.</p>
      <button
        onClick={handleGoToExternalSite}
        className="back-button"
      >
        Visit E-Commerce Site
      </button>
    </div>
  );
}

export default CardOne;

