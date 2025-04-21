import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleGoToExternalSite = () => {
    window.location.href = "https://street-sneaks.vercel.app";
  };

  return (
    <>
      <h1 className="main-heading">HOST@404</h1>
      <div className="home-container">
        {/* Existing cards */}
        <div className="card" onClick={handleGoToExternalSite}>
          <h2>Shopping</h2>
        </div>
        <div className="card" onClick={() => navigate("/card-two")}>
          <h2>Movies</h2>
        </div>
        <div className="card" onClick={() => navigate("/card-three")}>
          <h2>Songs</h2>
        </div>

        {/* New cards for extensions */}
       
        <div className="card" onClick={() => navigate("/file-upload")}>
          <h2>File Upload</h2>
        </div>
        <div className="card" onClick={() => navigate("/terminal-ui")}>
          <h2>Note Taker</h2>
        </div>
        <div className="card" onClick={() => navigate("/collaborate")}>
          <h2>Collaborators</h2>
        </div>
        <div className="card" onClick={() => navigate("/qr-code-download")}>
          <h2>QR File Download</h2>
        </div>
      </div>
    </>
  );
}

export default Home;
