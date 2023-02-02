import React from "react";
import "./MoviesContainer.css";

const MoviesContainer = ({ children }) => {
  return <section className="movies-container">{children}</section>;
};

export default MoviesContainer;
