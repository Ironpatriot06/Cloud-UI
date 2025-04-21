import React from "react";
import "./Card.css";

function CardThree() {
  const songs = [
    { name: "Blinding Lights", file: "blinding_lights.mp3" },
    { name: "Levitating", file: "levitating.mp3" },
    { name: "Shape of You", file: "shape_of_you.mp3" },
    { name: "Industry Baby", file: "industry_baby.mp3" },
    { name: "Stay", file: "stay.mp3" },
    { name: "Montero", file: "montero.mp3" },
    { name: "Peaches", file: "peaches.mp3" },
    { name: "Watermelon Sugar", file: "watermelon_sugar.mp3" },
    { name: "Positions", file: "positions.mp3" },
    { name: "Save Your Tears", file: "save_your_tears.mp3" }
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
    </div>
  );
}

export default CardThree;
