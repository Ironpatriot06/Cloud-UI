import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";


function CardTwo() {
  const navigate = useNavigate();

  const movies = [
    { name: "Inception", file: "20th Century Fox Intro HD.mp4" },
    { name: "Interstellar", file: "20th Century Fox Intro HD.mp4" },
    { name: "Rocky and Rani", file: "Dharma Productions (2008) [HD _ 1080p].mp4" },
    { name: "The Dark Knight", file: "20th Century Fox Intro HD.mp4" },
    { name: "Cars", file: "Pixar Intro HD 1080p.mp4" },
    { name: "Catch Me If You Can", file: "Pixar Intro HD 1080p.mp4" }
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
              <td>
  <a
    href={`/movies/${movie.file}`} // ✅ Corrected path
    download
    // className="download-btn"
  >
    Download
  </a>
</td>

              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="back-home-btn-container">
        <button className="back-home-btn" onClick={() => navigate("/home")}>
          ⬅️ Back to Home
        </button>
      </div>
    </div>
  );
}

export default CardTwo;
