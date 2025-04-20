import React from "react";
import "./Card.css";

function CardTwo() {
  const movies = [
    { name: "Inception", link: "https://www.netflix.com/in/title/70131314" },
    { name: "Interstellar", link: "https://www.netflix.com/in/title/70305903" },
    { name: "The Dark Knight", link: "https://www.netflix.com/in/title/70079583" },
    { name: "Avengers: Endgame", link: "https://www.hotstar.com/in/movies/avengers-endgame/1260013556" }
  ];

  return (
    <div className="card-details">
      <h2>Featured Movies</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>Watch</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.name}</td>
              <td>
                <a href={movie.link} target="_blank" rel="noopener noreferrer">Watch</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CardTwo;
