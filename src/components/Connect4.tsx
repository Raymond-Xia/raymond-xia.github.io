import { useState } from "react";
import "./TicTacToe.css";
import { Button } from "react-bootstrap";

function Square(props: any) {
  return (
    <button className="square" onClick={props.onClick}>
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
      if (winner === "X") {
        return "Red wins!";
      } else if (winner === "O") {
        return "Blue wins!";
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
    while (col - x >= 0 && squares[row][col - x] === player) {
      count++;
      x++;
    }
    // horizontal right
    x = 1;
    while (col + x < squares[0].length && squares[row][col + x] == player) {
      count++;
      x++;
    }

    if (count >= 4) {
      return player;
    }

    // vertical up
    count = 1;
    let y = 1;
    while (row - y >= 0 && squares[row - y][col] === player) {
      count++;
      y++;
    }
    // vertical down
    y = 1;
    while (row + y < squares.length && squares[row + y][col] === player) {
      count++;
      y++;
    }

    if (count >= 4) {
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
      count++;
      x++;
      y++;
    }
    // descending diagonal right
    y = 1;
    while (
      row + y < squares.length &&
      col + x < squares[0].length &&
      squares[row + y][col + x] === player
    ) {
      count++;
      x++;
      y++;
    }

    if (count >= 4) {
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
      count++;
      x++;
      y++;
    }

    if (count >= 4) {
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
  }

  return (
    <div className="game">
      <h1 className="game-title">Connect 4</h1>
      <div className="board-row">
        <Square value={squares[0][0]} onClick={() => handleClick(0, 0)} />
        <Square value={squares[0][1]} onClick={() => handleClick(0, 1)} />
        <Square value={squares[0][2]} onClick={() => handleClick(0, 2)} />
        <Square value={squares[0][3]} onClick={() => handleClick(0, 3)} />
        <Square value={squares[0][4]} onClick={() => handleClick(0, 4)} />
        <Square value={squares[0][5]} onClick={() => handleClick(0, 5)} />
        <Square value={squares[0][6]} onClick={() => handleClick(0, 6)} />
      </div>
      <div className="board-row">
        <Square value={squares[1][0]} onClick={() => handleClick(1, 0)} />
        <Square value={squares[1][1]} onClick={() => handleClick(1, 1)} />
        <Square value={squares[1][2]} onClick={() => handleClick(1, 2)} />
        <Square value={squares[1][3]} onClick={() => handleClick(1, 3)} />
        <Square value={squares[1][4]} onClick={() => handleClick(1, 4)} />
        <Square value={squares[1][5]} onClick={() => handleClick(1, 5)} />
        <Square value={squares[1][6]} onClick={() => handleClick(1, 6)} />
      </div>
      <div className="board-row">
        <Square value={squares[2][0]} onClick={() => handleClick(2, 0)} />
        <Square value={squares[2][1]} onClick={() => handleClick(2, 1)} />
        <Square value={squares[2][2]} onClick={() => handleClick(2, 2)} />
        <Square value={squares[2][3]} onClick={() => handleClick(2, 3)} />
        <Square value={squares[2][4]} onClick={() => handleClick(2, 4)} />
        <Square value={squares[2][5]} onClick={() => handleClick(2, 5)} />
        <Square value={squares[2][6]} onClick={() => handleClick(2, 6)} />
      </div>
      <div className="board-row">
        <Square value={squares[3][0]} onClick={() => handleClick(3, 0)} />
        <Square value={squares[3][1]} onClick={() => handleClick(3, 1)} />
        <Square value={squares[3][2]} onClick={() => handleClick(3, 2)} />
        <Square value={squares[3][3]} onClick={() => handleClick(3, 3)} />
        <Square value={squares[3][4]} onClick={() => handleClick(3, 4)} />
        <Square value={squares[3][5]} onClick={() => handleClick(3, 5)} />
        <Square value={squares[3][6]} onClick={() => handleClick(3, 6)} />
      </div>
      <div className="board-row">
        <Square value={squares[4][0]} onClick={() => handleClick(4, 0)} />
        <Square value={squares[4][1]} onClick={() => handleClick(4, 1)} />
        <Square value={squares[4][2]} onClick={() => handleClick(4, 2)} />
        <Square value={squares[4][3]} onClick={() => handleClick(4, 3)} />
        <Square value={squares[4][4]} onClick={() => handleClick(4, 4)} />
        <Square value={squares[4][5]} onClick={() => handleClick(4, 5)} />
        <Square value={squares[4][6]} onClick={() => handleClick(4, 6)} />
      </div>
      <div className="board-row">
        <Square value={squares[5][0]} onClick={() => handleClick(5, 0)} />
        <Square value={squares[5][1]} onClick={() => handleClick(5, 1)} />
        <Square value={squares[5][2]} onClick={() => handleClick(5, 2)} />
        <Square value={squares[5][3]} onClick={() => handleClick(5, 3)} />
        <Square value={squares[5][4]} onClick={() => handleClick(5, 4)} />
        <Square value={squares[5][5]} onClick={() => handleClick(5, 5)} />
        <Square value={squares[5][6]} onClick={() => handleClick(5, 6)} />
      </div>
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
