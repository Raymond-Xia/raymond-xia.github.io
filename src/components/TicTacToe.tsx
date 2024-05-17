import { useState } from "react";
import "./TicTacToe.css";
import { Button } from "react-bootstrap";

function Square(props: any) {
  return (
    <button
      style={{ color: "black" }}
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

function calculateWinner(squares: Array<string>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let emptyExists = false;
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] === null || squares[b] === null || squares[c] === null) {
      emptyExists = true;
    }
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  if (!emptyExists) return "XO";
  return null;
}

function Board(props: any) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState("");

  function handleClick(i: number) {
    if (winner != "" || squares[i]) {
      // if we have a winner or click on occupied square, do nothing
      return;
    }
    const squaresCopy = squares.slice();
    squaresCopy[i] = xIsNext ? "X" : "O";
    setSquares(squaresCopy);
    let x = calculateWinner(squaresCopy);
    if (x) {
      setWinner(x);
      return;
    }

    setXIsNext(!xIsNext);
  }

  function checkStatus() {
    if (winner === "X") {
      return "Player X wins!";
    } else if (winner === "O") {
      return "Player O wins!";
    } else if (winner === "XO") {
      return "It's a draw!";
    } else {
      return " ";
    }
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner("");
  }

  return (
    <div className="game">
      <h1 className="game-title">Tic Tac Toe</h1>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h3 className="status">{checkStatus()}</h3>
      <Button onClick={resetGame}>New Game</Button>
    </div>
  );
}

function TicTacToe() {
  return (
    <div id="tictactoe">
      <Board />
    </div>
  );
}

export default TicTacToe;
