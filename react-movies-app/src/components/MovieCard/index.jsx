import "./MovieCard.css";
import notFound from "../../assets/not-found.png";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movies }) => {
  return (
    <div className="movie-card">
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <img
              src={movie.poster_path ? IMG_URL + movie.poster_path : notFound}
              alt={movie.title}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MovieCard;
