import { useState } from "react";
import "./TicTacToe.css";

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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Board(props: any) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState("");

  function handleClick(i: number) {
    console.log(squares[i]);
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
    if (winner != "") {
      return winner + " wins!!";
    }
    return xIsNext ? "Next player: X" : "Next player: O";
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner("");
  }

  return (
    <>
      <h1 className="status">{checkStatus()}</h1>
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
      <button
        style={{
          marginTop: "10px",
          backgroundColor: "lightgray",
          color: "black",
        }}
        onClick={resetGame}
      >
        New Game
      </button>
    </>
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
