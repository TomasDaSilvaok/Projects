import React from "react";
import MovieCard from "../MovieCard";
import "./MoviesContainer.css";

const MoviesContainer = ({ movies }) => {
  return (
    <section className="movies-container">
      <MovieCard movies={movies} />
    </section>
  );
};

export default MoviesContainer;
