import { useState } from "react";
import "./Checkers.css";

function Square(props: any) {
  return (
    <button
      style={{ backgroundColor: props.color }}
      className="squareCheckers"
      onClick={props.onClick}
    >
      {props.value === "x"
        ? "⚫"
        : props.value === "o"
        ? "🔴"
        : props.value === "X"
        ? "🖤"
        : props.value === "O"
        ? "❤️"
        : ""}
    </button>
  );
}

function Board() {
  const initialValue = Array.from({ length: 8 }, () =>
    Array.from({ length: 8 }, () => "")
  );
  for (let i = 0; i < 3; i++) {
    for (let j = (i + 1) % 2; j < initialValue.length; j += 2) {
      initialValue[i][j] = "o";
    }
  }

  for (let i = initialValue.length - 3; i < initialValue.length; i++) {
    for (let j = (i + 1) % 2; j < initialValue.length; j += 2) {
      initialValue[i][j] = "x";
    }
  }

  const [squares, setSquares] = useState(initialValue);
  const [pieceRow, setPieceRow] = useState(-1);
  const [pieceCol, setPieceCol] = useState(-1);
  const [numRed, setNumRed] = useState(12);
  const [numBlack, setNumBlack] = useState(12);

  function handleClick(row: number, col: number) {
    if (squares[row][col] != "") {
      console.log("selected piece");
      setPieceRow(row);
      setPieceCol(col);
      return;
    }

    const squaresCopy = squares.slice();

    let piece = squares[pieceRow][pieceCol];
    let numRedCopy = numRed;
    let numBlackCopy = numBlack;
    if (row < pieceRow) {
      // move up
      if (piece === "o") {
        // regular red pieces can't move upward (backward)
        return;
      }

      if (row === pieceRow - 2 && col === pieceCol - 2) {
        // jump up left
        if (
          squares[pieceRow - 1][pieceCol - 1].toLowerCase() ===
          (piece.toLowerCase() === "x" ? "o" : "x")
        ) {
          squaresCopy[pieceRow - 1][pieceCol - 1] = "";
          if (piece.toLowerCase() === "x") numRedCopy--;
          if (piece.toLowerCase() === "o") numBlackCopy--;
        } else {
          return;
        }
      } else if (row === pieceRow - 2 && col === pieceCol + 2) {
        // jump up right
        if (
          squares[pieceRow - 1][pieceCol + 1].toLowerCase() ===
          (piece.toLowerCase() === "x" ? "o" : "x")
        ) {
          squaresCopy[pieceRow - 1][pieceCol + 1] = "";
          if (piece.toLowerCase() === "x") numRedCopy--;
          if (piece.toLowerCase() === "o") numBlackCopy--;
        } else {
          return;
        }
      }
    } else if (row > pieceRow) {
      // move down
      if (piece === "x") {
        // regular black pieces can't move downward (backward)
        return;
      }

      if (row === pieceRow + 2 && col === pieceCol - 2) {
        // jump down left
        if (
          squares[pieceRow + 1][pieceCol - 1].toLowerCase() ===
          (piece.toLowerCase() === "x" ? "o" : "x")
        ) {
          squaresCopy[pieceRow + 1][pieceCol - 1] = "";
          if (piece.toLowerCase() === "x") numRedCopy--;
          if (piece.toLowerCase() === "o") numBlackCopy--;
        } else {
          return;
        }
      } else if (
        // jump down right
        row === pieceRow + 2 &&
        col === pieceCol + 2
      ) {
        if (
          squares[pieceRow + 1][pieceCol + 1].toLowerCase() ===
          (piece.toLowerCase() === "x" ? "o" : "x")
        ) {
          squaresCopy[pieceRow + 1][pieceCol + 1] = "";
          if (piece.toLowerCase() === "x") numRedCopy--;
          if (piece.toLowerCase() === "o") numBlackCopy--;
        } else {
          return;
        }
      }
    }

    if (
      !(Math.abs(row - pieceRow) === 1 && Math.abs(col - pieceCol) === 1) &&
      !(Math.abs(row - pieceRow) === 2 && Math.abs(col - pieceCol) === 2)
    ) {
      // if not 2 square jump or 1 square move, ignore click
      return;
    }

    // console.log("valid move");

    // Move piece
    if (piece === "x" && row === 0) {
      squaresCopy[row][col] = "X";
    } else if (piece === "o" && row === 7) {
      squaresCopy[row][col] = "O";
    } else {
      squaresCopy[row][col] = squares[pieceRow][pieceCol];
    }
    squaresCopy[pieceRow][pieceCol] = "";

    setSquares(squaresCopy);
    setNumBlack(numBlackCopy);
    setNumRed(numRedCopy);
    setPieceRow(row);
    setPieceCol(col);
  }

  function checkStatus() {
    if (numRed == 0) {
      return "Black wins!!!";
    } else if (numBlack == 0) {
      return "Red wins!!!";
    }
    return "";
  }

  function resetGame() {
    setSquares(initialValue);
    setPieceRow(-1);
    setPieceCol(-1);
    setNumBlack(12);
    setNumRed(12);
  }

  function generateRow(row: number) {
    return (
      <>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((col) => (
          <Square
            key={row + "-" + col}
            color={(col + row) % 2 == 0 ? "white" : "#d19e66"}
            value={squares[row][col]}
            onClick={() => handleClick(row, col)}
          />
        ))}
      </>
    );
  }

  return (
    <>
      <br />
      <div className="board-row">{generateRow(0)}</div>
      <div className="board-row">{generateRow(1)}</div>
      <div className="board-row">{generateRow(2)}</div>
      <div className="board-row">{generateRow(3)}</div>
      <div className="board-row">{generateRow(4)}</div>
      <div className="board-row">{generateRow(5)}</div>
      <div className="board-row">{generateRow(6)}</div>
      <div className="board-row">{generateRow(7)}</div>
      <h1 className="status">{checkStatus()}</h1>
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

function Checkers() {
  return (
    <div id="checkers">
      <Board />
    </div>
  );
}

export default Checkers;
