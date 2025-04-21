import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';  // Import the CSS for styling

function Home() {
  const navigate = useNavigate();

  const handleGoToExternalSite = () => {
    window.location.href = "https://street-sneaks.vercel.app";
  };

  const handleo = () => {
    navigate("./card-one");
  };

  const handlet = () => {
    navigate("./card-two");
  };

  const handleth = () => {
    navigate("./card-three");
  };

  return (
    <>
      <h1 className="main-heading">HOST@404</h1> {/* Moved outside the container */}
      <div className="home-container">
        <div className="card" onClick={handleGoToExternalSite}>
          <h2>Shopping</h2>
        </div>
        <div className="card" onClick={handlet}>
          <h2>Movies</h2>
        </div>
        <div className="card" onClick={handleth}>
          <h2>Songs</h2>
        </div>
      </div>
    </>
  );
}

export default Home;
