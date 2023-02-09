import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

const IMAGES = [
  "https://icongr.am/devicon/android-original.svg?size=100&color=000000",
  "https://icongr.am/devicon/apple-original.svg?size=100&color=ffffff",
  "https://icongr.am/devicon/css3-original.svg?size=100&color=000000",
  "https://icongr.am/devicon/firefox-original.svg?size=100&color=000000",
  "https://icongr.am/devicon/git-original.svg?size=100&color=000000",
  "https://icongr.am/devicon/google-original.svg?size=100&color=000000",
  "https://icongr.am/devicon/html5-original.svg?size=100&color=000000",
  "https://icongr.am/devicon/javascript-original.svg?size=100&color=000000",
  "https://icongr.am/devicon/linkedin-original.svg?size=100&color=000000",
  "https://icongr.am/devicon/ruby-original.svg?size=100&color=000000",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);

function App() {
  const [guessed, setGuessed] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }

      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);

  useEffect(() => {
    if (guessed.length === IMAGES.length) {
      confetti();
    }
  }, [guessed]);

  return (
    <div className="App">
      <h1>MemoTest</h1>
      <ul className="main-container">
        {IMAGES.map((image) => {
          const [, url] = image.split("|");

          return (
            <li
              key={image}
              onClick={() =>
                selected.length < 2 &&
                setSelected((selected) => selected.concat(image))
              }
            >
              {selected.includes(image) || guessed.includes(image) ? (
                <img src={url} alt="icon" />
              ) : (
                <img
                  key={image}
                  src="https://icongr.am/fontawesome/rotate-right.svg?size=80&color=7b41f9"
                  alt="icon"
                />
              )}
            </li>
          );
        })}
      </ul>

      {guessed.length === IMAGES.length && (
        <div className="winner-modal">
          <div className="winner-text">
            <h2>You win!!</h2>
            <button
              onClick={() => {
                location.reload();
              }}
            >
              Resetear Juego
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
