import { useState } from "react";
import "./Wordle.css";

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
  "RIZZY",
  "CUPID",
  "CHARM",
  "ROSES",
  "TULIP",
];

function Letter(props: any) {
  return (
    <p className="letter" style={{ backgroundColor: props.color }}>
      {props.letter}
    </p>
  );
}

function Guess(props: any) {
  const guess = props.guess;
  const answer = props.answer;

  const [colors, setColors] = useState(Array(5).fill("white"));

  function checkLetter(i: number) {
    // console.log(answer[i], guess[i]);
    let color;
    if (guess == "") {
      color = "white";
    } else if (answer[i] == guess[i]) {
      color = "green";
    } else if (answer.includes(guess[i])) {
      color = "yellow";
    } else {
      color = "grey";
    }
    return color;
  }

  // function checkLetters() {
  //   let answerLetters = new Map<string, number>();
  //   let guessLetters = new Map<string, number>();
  //   for (let i = 0; i < guess.length; i++) {
  //     if (guess[i] == answer[i]) {
  //       colors[i] = "green";
  //     }
  //     guessLetters.has(l) ? guessLetters.set(l, guessLetters.get(l)! + 1) : 1; // increment letter count
  //   }
  // }

  return (
    <div className="board-row">
      <Letter letter={guess[0]} color={checkLetter(0)}></Letter>
      <Letter letter={guess[1]} color={checkLetter(1)}></Letter>
      <Letter letter={guess[2]} color={checkLetter(2)}></Letter>
      <Letter letter={guess[3]} color={checkLetter(3)}></Letter>
      <Letter letter={guess[4]} color={checkLetter(4)}></Letter>
    </div>
  );
}

function Wordle() {
  const [guesses, setGuesses] = useState(Array(5).fill(""));
  const [input, setInput] = useState("");
  const [attempt, setAttempt] = useState(0);
  const [answer, setAnswer] = useState(
    WORDS[Math.floor(Math.random() * WORDS.length)]
  );
  const [answerInput, setAnswerInput] = useState("");

  function handleAnswer(e: any) {
    e.preventDefault();
    if (answerInput.length === 5) {
      setAnswer(answerInput);
      setAnswerInput("");
      setAttempt(0);
      setGuesses(Array(5).fill(""));
    } else {
      getGameMessage();
    }
  }

  function handleGuess(e: any) {
    e.preventDefault();
    console.log(attempt);

    const nextGuesses = guesses.map((g, i) => {
      if (i === attempt) {
        return input;
      } else {
        return g;
      }
    });

    setGuesses(nextGuesses);
    setAttempt(attempt + 1);
    setInput("");
  }

  function getGameMessage() {
    // scuffed bc of setAttempt desync in handleGuesses

    if (guesses[attempt - 1] === answer) {
      return "YOU WIN!!";
    } else if (attempt >= 5) {
      return "L! The answer was " + answer;
    } else {
      return "";
    }
  }

  function resetGame() {
    setGuesses(Array(5).fill(""));
    setAttempt(0);
    setAnswer(WORDS[Math.floor(Math.random() * WORDS.length)]);
  }

  return (
    <div id="wordle-game">
      <h1 style={{ fontWeight: "bold" }}>Wordle</h1>
      <div id="guesses">
        <Guess guess={guesses[0]} answer={answer} />
        <Guess guess={guesses[1]} answer={answer} />
        <Guess guess={guesses[2]} answer={answer} />
        <Guess guess={guesses[3]} answer={answer} />
        <Guess guess={guesses[4]} answer={answer} />
      </div>
      <h1>{getGameMessage()}</h1>
      <form onSubmit={handleGuess}>
        <label>
          {"GUESS: "}
          <input
            style={{ maxWidth: "100px", marginBottom: "10px" }}
            type="text"
            id="input"
            value={input}
            minLength={5}
            maxLength={5}
            onChange={(e) => setInput(e.target.value.toUpperCase())}
          />
        </label>
        <input
          style={{ backgroundColor: "lightgray", color: "black" }}
          type="submit"
          value="SUBMIT"
          disabled={
            attempt >= 5 || guesses[attempt - 1] === answer ? true : false
          }
        />
      </form>
      <form onSubmit={handleAnswer}>
        <label>
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
      </form>
      <button
        style={{ backgroundColor: "lightgray", color: "black" }}
        onClick={resetGame}
      >
        New Word
      </button>
    </div>
  );
}

export default Wordle;
