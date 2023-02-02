const API_KEY = "013f9695fb0d6b81f23bc56ad896f66a";

async function getMovieDetails(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  const json = await response.json();
  return json;
}

export default getMovieDetails;
