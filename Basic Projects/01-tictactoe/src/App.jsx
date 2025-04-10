import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const renderSquare = (index) => {
    return <button onClick={() => handleClick(index)}>{board[index]}</button>;
  };
  const handleClick = (index) => {
    console.log(index, "Clicked");
    if (board[index] != null || winner) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "0";
    setBoard(newBoard);
    setXTurn(!isXTurn);
    const winnerCombination = checkWinner(newBoard);
    if (winnerCombination) {
      setWinner(newBoard[winnerCombination[0]]);
    }
  };
  const checkWinner = (board) => {
    const combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < combination.length; i++) {
      const [a, b, c] = combination[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return combination[i];
      }
    }
    return null;
  };
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
  };
  return (
    <>
      <div className="board">
        <h1>Tic Tac Toe Game</h1>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      {winner && <div>{winner} is Winner of this Game.</div>}
      <button id="reset" onClick={resetGame}>
        Reset
      </button>
    </>
  );
}

export default App;
