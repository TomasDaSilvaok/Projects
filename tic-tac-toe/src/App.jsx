import { TURNS } from "./constants";
import Board from "./components/Board";
import Turns from "./components/Turns";
import WinnerModal from "./components/WinnerModal";
import { useState } from "react";
import { checkWinner, checkTie } from "./logic";
import confetti from "canvas-confetti";
import { saveStorageData, resetStorage } from "./logic/store";

function App() {
  const [board, setBoard] = useState(() => {
    const storageBoard = localStorage.getItem("board");
    return storageBoard ? JSON.parse(storageBoard) : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const storageTurn = localStorage.getItem("turn");
    return storageTurn ? storageTurn : TURNS.X;
  });

  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    saveStorageData(newBoard, newTurn);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (checkTie(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    resetStorage();
  };

  return (
    <main className="board">
      <h1>Tic-Tac-Toe</h1>
      <button onClick={resetGame}>Resetear el juego</button>
      <Board board={board} updateBoard={updateBoard} />
      <Turns turn={turn} TURNS={TURNS} />
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}

export default App;
