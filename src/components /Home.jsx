import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';  // Import the CSS for styling
import CardThree from "../components /CardThree";
import CardOne from "../components /CardOne";
import CardTwo from "../components /CardTwo";
import CardFour from "../components /CardFour";

function Home() {

    const handleGoToExternalSite = () => {
        window.location.href = "https://street-sneaks.vercel.app";
      };

    const navigate = useNavigate();
    const handleo = () =>{
        navigate("./card-one")
    };

    const handlet = () =>{
        navigate("./card-two")
    };

    const handleth = () =>{
        navigate("./card-three")
    };


  return (
    <div className="home-container">
      <div className="card" onClick={handleGoToExternalSite}>
          <h2>Card 1</h2>
      </div>
      <div className="card" onClick={handlet}>
          <h2>Card 2</h2>
      </div>
      <div className="card" onClick={handleth}>
          <h2>Card 3</h2>
      </div>
      <div className="card" onClick={handleth}>
          <h2>Card 4</h2>
      </div>
    </div>
  );
}

export default Home;
