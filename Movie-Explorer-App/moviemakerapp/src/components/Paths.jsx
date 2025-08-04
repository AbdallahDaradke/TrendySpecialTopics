import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "../pages/MovieDetails";
import Home from "../pages/Home";
import MovieCard from "./MovieCard";

function paths() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/moviedetails/:id" element={<MovieDetails />}></Route>
      <Route path="/movie/:id" element={<MovieCard />}></Route>

      <Route path="*" element={<h1>Page not found</h1>}></Route>
    </Routes>
  );
}

export default paths;
