import React from "react";
import "./Card.css";

function CardTwo() {
  const movies = [
    { name: "Inception", file: "inception.mp4" },
    { name: "Interstellar", file: "interstellar.mp4" },
    { name: "The Dark Knight", file: "dark_knight.mp4" },
    { name: "Avengers: Endgame", file: "endgame.mp4" }
  ];

  return (
    <div className="card-details">
      <h2>Featured Movies</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>Watch</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.name}</td>
              <td>
                <video width="250" controls>
                  <source src={`/movies/${movie.file}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </td>
              <td>
                <a
                  href={`/movies/${movie.file}`}
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

export default CardTwo;
