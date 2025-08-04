import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=0deab0293bbd61498681898d121390ca`
    ).then((response) => {
      setMovie(response.data);
      // console.log(response.data);
    });
  }, [id]);

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
      <p>
        <b>Overview: </b>
        {movie.overview}
      </p>
      <p>
        <b>Budget: </b>
        {movie.budget}$
      </p>
    </div>
  );
}

export default MovieDetails;
