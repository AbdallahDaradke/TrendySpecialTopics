import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

function MovieCard({ movie, key }) {
  return (
    <div className="movie-card" key={key}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <Link to={`/moviedetails/${movie.id}`}>View Details</Link>
    </div>
  );
}

export default MovieCard;
