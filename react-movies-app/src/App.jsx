import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
