const API_KEY = "013f9695fb0d6b81f23bc56ad896f66a";

async function searchMovies(searchText) {
  if (!searchText) return;

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchText}&include_adult=false`
  );
  const json = await response.json();
  console.log(json);
  return json;
}

export default searchMovies;
