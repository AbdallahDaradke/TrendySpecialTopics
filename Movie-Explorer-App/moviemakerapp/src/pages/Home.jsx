import axios from "axios";
import React, { use, useEffect, useState } from "react";

function Home() {
  //state for movies retrieve and set
  const [movies, setMovies] = useState([]);

  //Empty array in useEffect() means that there are no dependencies and the effect will only run one time when component mounts and will not re-run on updates

  useEffect(() => {
    axios(
      "https://api.themoviedb.org/3/movie/popular?api_key=0deab0293bbd61498681898d121390ca"
    ).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  useEffect(() => {
    console.log(movies);
  }, [movies]);
}

export default Home;
