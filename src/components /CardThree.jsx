import React from "react";
import "./Card.css";

function CardThree() {
  const songs = [
    { name: "Blinding Lights", link: "https://www.youtube.com/watch?v=4NRXx6U8ABQ" },
    { name: "Levitating", link: "https://www.youtube.com/watch?v=TUVcZfQe-Kw" },
    { name: "Shape of You", link: "https://www.youtube.com/watch?v=JGwWNGJdvx8" },
    { name: "Industry Baby", link: "https://www.youtube.com/watch?v=UTHLKHL_whs" },
    { name: "Stay", link: "https://www.youtube.com/watch?v=kTJczUoc26U" },
    { name: "Montero", link: "https://www.youtube.com/watch?v=6swmTBVI83k" },
    { name: "Peaches", link: "https://www.youtube.com/watch?v=tQ0yjYUFKAE" },
    { name: "Watermelon Sugar", link: "https://www.youtube.com/watch?v=E07s5ZYygMg" },
    { name: "Positions", link: "https://www.youtube.com/watch?v=tcYodQoapMg" },
    { name: "Save Your Tears", link: "https://www.youtube.com/watch?v=XXYlFuWEuKI" }
  ];

  return (
    <div className="card-details">
      <h2>Top Songs</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Song Name</th>
            <th>Listen</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={index}>
              <td>{song.name}</td>
              <td>
                <a href={song.link} target="_blank" rel="noopener noreferrer">Listen</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CardThree;
