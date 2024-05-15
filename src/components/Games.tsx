import { Button, Card, Col, Row, Modal, Container } from "react-bootstrap";
import wordle from "../assets/wordle.png";
import tictactoe from "../assets/tictactoe.png";
import connect4 from "../assets/connect4.png";
import checkers from "../assets/checkers.png";
import Wordle from "./Wordle";
import TicTacToe from "./TicTacToe";
import Connect4 from "./Connect4";
import Checkers from "./Checkers";
import { useState } from "react";

function Games() {
  const [show, setShow] = useState(false);
  const [game, setGame] = useState(0);

  const handleClose = () => setShow(false);
  const handleGame = (id: number) => {
    setGame(id);
    setShow(true);
  };

  function getGame() {
    switch (game) {
      case 0:
        return <Wordle />;
      case 1:
        return <TicTacToe />;
      case 2:
        return <Connect4 />;
      case 3:
        return <Checkers />;
    }
  }
  return (
    <div className="section">
      <h1 className="display-5">Games</h1>
      <hr />
      <div className="grid-container">
        <Row xs="2" md="4">
          <Col>
            <Card bg="dark" data-bs-theme="dark">
              <Card.Img className="game-image" src={wordle} />
              <Card.Body>
                <Card.Title>Wordle</Card.Title>
                <Button onClick={() => handleGame(0)} variant="primary">
                  Play Wordle
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="dark" data-bs-theme="dark">
              <Card.Img className="game-image" src={tictactoe} />
              <Card.Body>
                <Card.Title>Tic Tac Toe</Card.Title>
                <Button onClick={() => handleGame(1)} variant="primary">
                  Play TicTacToe
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="dark" data-bs-theme="dark">
              <Card.Img className="game-image" src={connect4} />
              <Card.Body>
                <Card.Title>Connect 4</Card.Title>
                <Button onClick={() => handleGame(2)} variant="primary">
                  Play Connect4
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="dark" text="light">
              <Card.Img className="game-image" src={checkers} />
              <Card.Body>
                <Card.Title>Checkers</Card.Title>
                <Button onClick={() => handleGame(3)} variant="primary">
                  Play Checkers
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <Modal show={show} onHide={handleClose}>
        {getGame()}
      </Modal>
    </div>
  );
}

export default Games;
