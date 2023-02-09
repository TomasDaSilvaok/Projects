import NavBar from "../../components/NavBar";
import MoviesContainer from "../../components/MoviesContainer";
import getMovies from "../../services/getMovies";
import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((res) => {
      console.log(res);
      setMovies(res.results);
    });
  }, []);

  return (
    <section>
      <NavBar setMovies={setMovies} />
      <MoviesContainer>
        <MovieCard movies={movies} />
      </MoviesContainer>
    </section>
  );
};

export default Home;
