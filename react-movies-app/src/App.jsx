import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./Pages/MovieDetail/MovieDetail";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/detail/:id" exact element={<MovieDetail />} />
      </Routes>
    </main>
  );
}

export default App;
