import { useState } from "react";
import "./Wordle.css";
import { Button } from "react-bootstrap";

const WORDS = [
  "HEART",
  "LOVER",
  "HONEY",
  "SWEET",
  "MARRY",
  "ADORE",
  "CRUSH",
  "CUTIE",
  "SUGAR",
  "CUPID",
  "CHARM",
  "ROSES",
  "TULIP",
];

const MAX_ATTEMPTS = 6;
const WORD_LENGTH = 5;

function Letter(props: any) {
  return (
    <p
      className="letter"
      style={{ backgroundColor: props.color, color: props.textColor }}
    >
      {props.letter}
    </p>
  );
}

function Guess(props: any) {
  const word = props.word;
  const colors = props.colors;

  return (
    <div className="board-row">
      <Letter
        letter={word[0]}
        color={colors[0]}
        textColor={colors[0] ? "white" : "black"}
      ></Letter>
      <Letter
        letter={word[1]}
        color={colors[1]}
        textColor={colors[0] ? "white" : "black"}
      ></Letter>
      <Letter
        letter={word[2]}
        color={colors[2]}
        textColor={colors[0] ? "white" : "black"}
      ></Letter>
      <Letter
        letter={word[3]}
        color={colors[3]}
        textColor={colors[0] ? "white" : "black"}
      ></Letter>
      <Letter
        letter={word[4]}
        color={colors[4]}
        textColor={colors[0] ? "white" : "black"}
      ></Letter>
    </div>
  );
}

function KeyButton(props: any) {
  return (
    <button className="key-button" onClick={props.onClick} style={props.style}>
      {props.letter}
    </button>
  );
}

function Wordle() {
  const [attempt, setAttempt] = useState(0);
  const [answer, setAnswer] = useState(
    WORDS[Math.floor(Math.random() * WORDS.length)]
  );
  const [letters, setLetters] = useState(
    Array.from({ length: MAX_ATTEMPTS }, () =>
      Array.from({ length: WORD_LENGTH }, () => "")
    )
  );
  const [colors, setColors] = useState(
    Array.from({ length: MAX_ATTEMPTS }, () =>
      Array.from({ length: WORD_LENGTH }, () => "")
    )
  );
  const [winner, setWinner] = useState("");
  const [index, setIndex] = useState(0);
  let usedWords = [answer];

  // const [answerInput, setAnswerInput] = useState("");

  // function handleAnswer(e: any) {
  //   e.preventDefault();
  //   if (answerInput.length === 5) {
  //     setAnswer(answerInput);
  //     setAnswerInput("");
  //     setAttempt(0);
  //     setGuesses(Array(6).fill(""));
  //   } else {
  //     getGameMessage();
  //   }
  // }

  function handleGuess(e: any) {
    e.preventDefault(); // stops page from refreshing

    if (winner != "") return;

    let guess = letters[attempt].slice();
    if (guess.length != WORD_LENGTH) return;

    let colorsCopy = colors.slice();
    let answerCopy = answer.split("");
    for (let i = 0; i < WORD_LENGTH; i++) {
      // check match (greens) and exclude letters from check
      if (guess[i] === answerCopy[i]) {
        colorsCopy[attempt][i] = "green";
        guess[i] = "";
      }
    }

    for (let i = 0; i < WORD_LENGTH; i++) {
      // check yellows
      if (guess[i] != "") {
        if (answerCopy.includes(guess[i])) {
          colorsCopy[attempt][i] = "gold";
          guess[i] = "";
        } else {
          colorsCopy[attempt][i] = "grey";
        }
      }
    }

    calculateWinner(letters[attempt].join(""));

    setColors(colorsCopy);
    setAttempt(attempt + 1);
    setIndex(0);
  }

  function handleLetter(letter: string) {
    if (index === WORD_LENGTH || winner != "") return;
    let lettersCopy = letters.slice();
    lettersCopy[attempt][index] = letter;
    setLetters(lettersCopy);
    setIndex(index + 1);
  }

  function handleBackSpace() {
    if (index === 0 || winner != "") return;
    let lettersCopy = letters.slice();
    lettersCopy[attempt][index - 1] = "";
    setIndex(index - 1);
  }

  let button;
  function checkStatus() {
    if (winner === "W") {
      button = <Button onClick={resetGame}>New Word</Button>;
      return "You won!!";
    } else if (winner === "L") {
      button = <Button onClick={resetGame}>New Word</Button>;
      return "The word was " + answer + "!";
    } else {
      return "";
    }
  }

  function calculateWinner(input: string) {
    if (input === answer) {
      setWinner("W");
    } else if (attempt === MAX_ATTEMPTS - 1) {
      setWinner("L");
    } else {
      return "";
    }
  }

  function resetGame() {
    setLetters(
      Array.from({ length: MAX_ATTEMPTS }, () =>
        Array.from({ length: WORD_LENGTH }, () => "")
      )
    );
    setColors(
      Array.from({ length: MAX_ATTEMPTS }, () =>
        Array.from({ length: WORD_LENGTH }, () => "")
      )
    );
    setAttempt(0);
    setWinner("");

    let newAnswer = "";
    if (usedWords.length < WORDS.length) {
      // Use an unused word
      do {
        newAnswer = WORDS[Math.floor(Math.random() * WORDS.length)];
      } while (usedWords.indexOf(newAnswer) != -1);
      setAnswer(newAnswer);
      usedWords.push(newAnswer);
    } else {
      usedWords = [];
    }
  }

  return (
    <div className="game">
      <h1 className="game-title">Wordle</h1>
      <div id="guesses">
        <Guess word={letters[0]} colors={colors[0]} />
        <Guess word={letters[1]} colors={colors[1]} />
        <Guess word={letters[2]} colors={colors[2]} />
        <Guess word={letters[3]} colors={colors[3]} />
        <Guess word={letters[4]} colors={colors[4]} />
        <Guess word={letters[5]} colors={colors[5]} />
      </div>
      {/* <form onSubmit={handleAnswer}>
        <label className="status">
          {"CUSTOM: "}
          <input
            style={{ maxWidth: "100px", marginBottom: "10px" }}
            type="text"
            id="answerInput"
            value={answerInput}
            minLength={5}
            maxLength={5}
            onChange={(e) => setAnswerInput(e.target.value.toUpperCase())}
          />
        </label>
        <input
          style={{ backgroundColor: "lightgray", color: "black" }}
          type="submit"
          value="SUBMIT"
        />
      </form> */}

      <div style={{ margin: "10px" }} className="keyboard">
        <div className="board-row">
          <KeyButton onClick={() => handleLetter("Q")} letter="Q" />
          <KeyButton onClick={() => handleLetter("W")} letter="W" />
          <KeyButton onClick={() => handleLetter("E")} letter="E" />
          <KeyButton onClick={() => handleLetter("R")} letter="R" />
          <KeyButton onClick={() => handleLetter("T")} letter="T" />
          <KeyButton onClick={() => handleLetter("Y")} letter="Y" />
          <KeyButton onClick={() => handleLetter("U")} letter="U" />
          <KeyButton onClick={() => handleLetter("I")} letter="I" />
          <KeyButton onClick={() => handleLetter("O")} letter="O" />
          <KeyButton onClick={() => handleLetter("P")} letter="P" />
        </div>
        <div className="board-row">
          <KeyButton onClick={() => handleLetter("A")} letter="A" />
          <KeyButton onClick={() => handleLetter("S")} letter="S" />
          <KeyButton onClick={() => handleLetter("D")} letter="D" />
          <KeyButton onClick={() => handleLetter("F")} letter="F" />
          <KeyButton onClick={() => handleLetter("G")} letter="G" />
          <KeyButton onClick={() => handleLetter("H")} letter="H" />
          <KeyButton onClick={() => handleLetter("J")} letter="J" />
          <KeyButton onClick={() => handleLetter("K")} letter="K" />
          <KeyButton onClick={() => handleLetter("L")} letter="L" />
        </div>
        <div className="board-row">
          <KeyButton
            onClick={handleGuess}
            letter="Enter"
            style={{ fontSize: "0.6rem" }}
          />
          <KeyButton onClick={() => handleLetter("Z")} letter="Z" />
          <KeyButton onClick={() => handleLetter("X")} letter="X" />
          <KeyButton onClick={() => handleLetter("C")} letter="C" />
          <KeyButton onClick={() => handleLetter("V")} letter="V" />
          <KeyButton onClick={() => handleLetter("B")} letter="B" />
          <KeyButton onClick={() => handleLetter("N")} letter="N" />
          <KeyButton onClick={() => handleLetter("M")} letter="M" />
          <KeyButton
            onClick={handleBackSpace}
            letter="Back"
            style={{ fontSize: "0.6rem" }}
          />
        </div>
      </div>
      <h3 className="status">{checkStatus()}</h3>
      {button}
    </div>
  );
}

export default Wordle;
