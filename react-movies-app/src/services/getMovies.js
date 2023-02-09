const API_KEY = "013f9695fb0d6b81f23bc56ad896f66a";
const API_MOVIE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&limit=1500`;

async function getMovies() {
  const response = await fetch(API_MOVIE_URL);
  const json = await response.json();
  return json;
}

export default getMovies;
