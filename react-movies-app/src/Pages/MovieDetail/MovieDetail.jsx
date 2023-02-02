import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getMovieDetails from "../../services/getMovieDetails";
import "./MovieDetail.css";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetail = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMovieDetails(id).then((res) => {
      console.log(res);
      setMovieDetails([res]);
    });
  }, []);

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "90vw",
          margin: "20px auto",
        }}
      >
        <header>
          <h1 style={{ fontSize: "2rem" }}>Detalles de la película</h1>
        </header>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "none",
            borderRadius: "15px",
            backgroundColor: "#f5f3f3",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              fontWeight: "bold",
              padding: "8px 16px",
              color: "#1c1c1c",
            }}
            to={"/"}
          >
            Volver Atrás
          </Link>
        </div>
      </nav>
      {movieDetails.map((movie) => {
        return (
          <div className="movie-detail-container" key={movie.id}>
            <img src={IMG_URL + movie.poster_path} alt={movie.title} />
            <div className="movie-data">
              <div className="">
                <h2>{movie.title}</h2>
                <p className="overview">{movie.overview}</p>
              </div>
              <div>
                <p>Duración: {movie.runtime}min</p>
                <p>Fecha de lanzamiento: {movie.release_date}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieDetail;
