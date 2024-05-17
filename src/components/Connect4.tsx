import { useState } from "react";
import "./TicTacToe.css";
import { Button } from "react-bootstrap";

function Square(props: any) {
  return (
    <button id={props.id} className="square" onClick={props.onClick}>
      {props.value === "X" ? "🔴" : props.value === "O" ? "🔵" : ""}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(
    Array.from({ length: 6 }, () => Array.from({ length: 7 }, () => ""))
  );
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState("");

  const [line, setLine] = useState(Array(7).fill(null));

  function handleClick(row: number, col: number) {
    let targetRow = squares.length - 1;
    // find last empty row
    while (targetRow >= 0 && squares[targetRow][col] != "") {
      targetRow -= 1;
    }
    if (targetRow < 0) return; // ignore click if column full
    if (winner != "") return; // ignore if there is already a

    let w = calculateWinner(targetRow, col);
    if (w) {
      setWinner(w);
    }

    const squaresCopy = squares.slice();
    squaresCopy[targetRow][col] = xIsNext ? "X" : "O";
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  }

  function checkStatus() {
    if (winner != "") {
      // color winning line gold
      line.forEach((square) => {
        if (square) square.style.backgroundColor = "gold";
      });

      if (winner === "X") {
        return "Red wins!!";
      } else if (winner === "O") {
        return "Blue wins!!";
      } else {
        return "It's a draw!";
      }
    } else {
      return xIsNext ? "Next player: Red" : "Next player: Blue";
    }
  }

  function calculateWinner(row: number, col: number) {
    // check all 4 directions for adjacent 4-lines (horizontal, vertical, diagonal ascending, diagonal descending)
    let player = xIsNext ? "X" : "O";

    // horizontal left
    let count = 1;
    let x = 1;
    let line: HTMLElement[] = Array(7).fill(null);
    line[0] = document.getElementById(row + "-" + col)!;
    while (col - x >= 0 && squares[row][col - x] === player) {
      line[count] = document.getElementById(row + "-" + (col - x))!;
      count++;
      x++;
    }
    // horizontal right
    x = 1;
    while (col + x < squares[0].length && squares[row][col + x] == player) {
      line[count] = document.getElementById(row + "-" + (col + x))!;
      count++;
      x++;
    }

    if (count >= 4) {
      setLine(line);
      return player;
    }

    // vertical down
    count = 1;
    let y = 1;
    while (row + y < squares.length && squares[row + y][col] === player) {
      line[count] = document.getElementById(row + y + "-" + col)!;
      count++;
      y++;
    }

    if (count >= 4) {
      setLine(line);
      return player;
    }

    // descending diagonal left
    count = 1;
    x = 1;
    y = 1;
    while (
      row - y >= 0 &&
      col - x >= 0 &&
      squares[row - y][col - x] === player
    ) {
      line[count] = document.getElementById(row - y + "-" + (col - x))!;
      count++;
      x++;
      y++;
    }
    // descending diagonal right
    x = 1;
    y = 1;
    while (
      row + y < squares.length &&
      col + x < squares[0].length &&
      squares[row + y][col + x] === player
    ) {
      line[count] = document.getElementById(row + y + "-" + (col + x))!;
      count++;
      x++;
      y++;
    }

    if (count >= 4) {
      setLine(line);
      return player;
    }

    // ascending diagonal left
    count = 1;
    x = 1;
    y = 1;
    while (
      row + y < squares.length &&
      col - x >= 0 &&
      squares[row + y][col - x] === player
    ) {
      line[count] = document.getElementById(row + y + "-" + (col - x))!;
      count++;
      x++;
      y++;
    }
    // ascending diagonal right
    y = 1;
    while (
      row - y >= 0 &&
      col + x < squares[0].length &&
      squares[row - y][col + x] === player
    ) {
      line[count] = document.getElementById(row - y + "-" + (col + x))!;
      count++;
      x++;
      y++;
    }

    if (count >= 4) {
      setLine(line);
      return player;
    }

    if (squares.flat().filter((val) => val === "").length === 1) {
      return "XO";
    }

    return null;
  }

  function resetGame() {
    setSquares(
      Array.from({ length: 6 }, () => Array.from({ length: 7 }, () => ""))
    );
    setXIsNext(true);
    setWinner("");

    line.forEach((square) => {
      if (square) square.style.backgroundColor = "white";
    });

    setLine(Array(7).fill(null));
  }

  function generateRow(row: number) {
    return (
      <>
        {[0, 1, 2, 3, 4, 5, 6].map((col) => (
          <Square
            key={row + "-" + col}
            id={row + "-" + col}
            value={squares[row][col]}
            onClick={() => handleClick(row, col)}
          />
        ))}
      </>
    );
  }

  return (
    <div className="game">
      <h1 className="game-title">Connect 4</h1>
      <div className="board-row">{generateRow(0)}</div>
      <div className="board-row">{generateRow(1)}</div>
      <div className="board-row">{generateRow(2)}</div>
      <div className="board-row">{generateRow(3)}</div>
      <div className="board-row">{generateRow(4)}</div>
      <div className="board-row">{generateRow(5)}</div>
      <h3 className="status">{checkStatus()}</h3>
      <Button onClick={resetGame}>New Game</Button>
    </div>
  );
}

function Connect4() {
  return (
    <div id="connect4">
      <Board />
    </div>
  );
}

export default Connect4;
