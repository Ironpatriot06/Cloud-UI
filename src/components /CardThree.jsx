import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

function CardThree() {
  const navigate = useNavigate();

  const songs = [
    { name: "Winning Speech", file: "Winning Speech (Music Video) Karan Aujla _ Mxrci _ Latest Punjabi Songs 2024-yt.savetube.me.mp3" },
    { name: "Espresso", file: "Sabrina Carpenter - Espresso (Official Video)-yt.savetube.me.mp3" },
    { name: "Until I found you", file: "Stephen Sanchez - Until I Found You (Official Video)-yt.savetube.me.mp3" },
    { name: "Shape of You", file: "Ed Sheeran - Shape of You (Lyrics)-yt.savetube.me.mp3" },
    { name: "Not Like Us", file: "Kendrick Lamar - Not Like Us-yt.savetube.me.mp3" }
  ];

  return (
    <div className="card-details">
      <h2>Top Songs</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Song Name</th>
            <th>Listen</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={index}>
              <td>{song.name}</td>
              <td>
                <audio controls>
                  <source src={`/music/${song.file}`} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </td>
              <td>
                <a
                  href={`/music/${song.file}`}
                  download
                  className="download-btn"
                >
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="back-home-btn-container">
        <button className="back-home-btn" onClick={() => navigate("/")}>
          ⬅️ Back to Home
        </button>
      </div>
    </div>
  );
}

export default CardThree;
