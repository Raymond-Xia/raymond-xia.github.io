import { useState } from "react";
import "./Checkers.css";
import { Button } from "react-bootstrap";

function Square(props: any) {
  return (
    <button
      id={props.id}
      style={{ backgroundColor: props.color }}
      className="squareCheckers"
      onClick={props.onClick}
    >
      {props.value === "black"
        ? "⚫"
        : props.value === "red"
        ? "🔴"
        : props.value === "BLACK"
        ? "🖤"
        : props.value === "RED"
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
      initialValue[i][j] = "red";
    }
  }

  for (let i = initialValue.length - 3; i < initialValue.length; i++) {
    for (let j = (i + 1) % 2; j < initialValue.length; j += 2) {
      initialValue[i][j] = "black";
    }
  }

  const [squares, setSquares] = useState(initialValue);
  const [pieceRow, setPieceRow] = useState(-1);
  const [pieceCol, setPieceCol] = useState(-1);
  const [numRed, setNumRed] = useState(12);
  const [numBlack, setNumBlack] = useState(12);

  function highlightPiece(row?: number, col?: number) {
    if (row && col) {
      document.getElementById(row + "-" + col)?.focus();
    } else {
      document.getElementById(pieceRow + "-" + pieceCol)?.focus();
    }
  }

  function handleClick(targetRow: number, targetCol: number) {
    if (numRed === 0 || numBlack === 0) return;

    if (squares[targetRow][targetCol] != "") {
      // select piece
      highlightPiece(targetRow, targetCol);
      setPieceRow(targetRow);
      setPieceCol(targetCol);
      return;
    } else if (pieceRow === -1) {
      // ignore click if empty square without moving piece
      highlightPiece();
      return;
    }

    let rowDiff = Math.abs(targetRow - pieceRow);
    let colDiff = Math.abs(targetCol - pieceCol);
    if (
      !(rowDiff === 1 && colDiff === 1) &&
      !(rowDiff === 2 && colDiff === 2)
    ) {
      // ignore click if not 1 square move or 2 square jump
      highlightPiece();
      return;
    }

    let squaresCopy = squares.slice();
    let piece = squares[pieceRow][pieceCol];
    let numRedCopy = numRed;
    let numBlackCopy = numBlack;

    if (targetRow < pieceRow) {
      // move up
      if (piece === "red") {
        // regular red pieces can't move upward (backward)
        highlightPiece();
        return;
      }

      if (targetRow === pieceRow - 2 && targetCol === pieceCol - 2) {
        // jump up left and capture opposing piece
        if (
          squares[pieceRow - 1][pieceCol - 1].toLowerCase() ===
          (piece.toLowerCase() === "black" ? "red" : "black")
        ) {
          squaresCopy[pieceRow - 1][pieceCol - 1] = "";
          if (piece.toLowerCase() === "black") numRedCopy--;
          if (piece.toLowerCase() === "red") numBlackCopy--;
        } else {
          highlightPiece();
          return;
        }
      } else if (targetRow === pieceRow - 2 && targetCol === pieceCol + 2) {
        // jump up right and capture opposing piece
        if (
          squares[pieceRow - 1][pieceCol + 1].toLowerCase() ===
          (piece.toLowerCase() === "black" ? "red" : "black")
        ) {
          squaresCopy[pieceRow - 1][pieceCol + 1] = "";
          if (piece.toLowerCase() === "black") numRedCopy--;
          if (piece.toLowerCase() === "red") numBlackCopy--;
        } else {
          highlightPiece();
          return;
        }
      }
    } else if (targetRow > pieceRow) {
      // move down
      if (piece === "black") {
        // regular black pieces can't move downward (backward)
        highlightPiece();
        return;
      }

      if (targetRow === pieceRow + 2 && targetCol === pieceCol - 2) {
        // jump down left and capture opposing piece
        if (
          squares[pieceRow + 1][pieceCol - 1].toLowerCase() ===
          (piece.toLowerCase() === "black" ? "red" : "black")
        ) {
          squaresCopy[pieceRow + 1][pieceCol - 1] = "";
          if (piece.toLowerCase() === "black") numRedCopy--;
          if (piece.toLowerCase() === "red") numBlackCopy--;
        } else {
          return;
        }
      } else if (targetRow === pieceRow + 2 && targetCol === pieceCol + 2) {
        // jump down right and capture opposing piece
        if (
          squares[pieceRow + 1][pieceCol + 1].toLowerCase() ===
          (piece.toLowerCase() === "black" ? "red" : "black")
        ) {
          squaresCopy[pieceRow + 1][pieceCol + 1] = "";
          if (piece.toLowerCase() === "black") numRedCopy--;
          if (piece.toLowerCase() === "red") numBlackCopy--;
        } else {
          return;
        }
      }
    }

    // Move piece
    if (piece === "black" && targetRow === 0) {
      // king black
      squaresCopy[targetRow][targetCol] = "BLACK";
    } else if (piece === "red" && targetRow === 7) {
      // king red
      squaresCopy[targetRow][targetCol] = "RED";
    } else {
      squaresCopy[targetRow][targetCol] = squares[pieceRow][pieceCol];
    }
    squaresCopy[pieceRow][pieceCol] = "";

    setSquares(squaresCopy);
    setNumBlack(numBlackCopy);
    setNumRed(numRedCopy);
    setPieceRow(targetRow);
    setPieceCol(targetCol);
  }

  function checkStatus() {
    if (numRed === 0) {
      return "Black wins!";
    } else if (numBlack === 0) {
      return "Red wins!";
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
            id={row + "-" + col}
            color={(col + row) % 2 === 0 ? "#fce3b3" : "#d19e66"}
            value={squares[row][col]}
            onClick={() => handleClick(row, col)}
          />
        ))}
      </>
    );
  }

  return (
    <div className="game">
      <h1 className="game-title">Checkers</h1>
      <div className="board" style={{ textAlign: "center" }}>
        <div className="board-row">{generateRow(0)}</div>
        <div className="board-row">{generateRow(1)}</div>
        <div className="board-row">{generateRow(2)}</div>
        <div className="board-row">{generateRow(3)}</div>
        <div className="board-row">{generateRow(4)}</div>
        <div className="board-row">{generateRow(5)}</div>
        <div className="board-row">{generateRow(6)}</div>
        <div className="board-row">{generateRow(7)}</div>
      </div>
      <h3 className="status">{checkStatus()}</h3>
      <Button onClick={resetGame}>New Game</Button>
    </div>
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
