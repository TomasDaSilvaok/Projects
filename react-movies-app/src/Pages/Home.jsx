import NavBar from "../components/NavBar";
import MoviesContainer from "../components/MoviesContainer";
import getMovies from "../services/getMovies";
import { useState, useEffect } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((res) => {
      setMovies(res.results);
    });
  }, []);

  return (
    <section>
      <NavBar setMovies={setMovies} />
      <MoviesContainer movies={movies} />
    </section>
  );
};

export default Home;
