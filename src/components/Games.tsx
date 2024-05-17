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
      <Container>
        <Row xs="2" md="4">
          <Col>
            <Card
              className="game-card"
              bg="dark"
              data-bs-theme="dark"
              onClick={() => handleGame(0)}
            >
              <Card.Img className="game-image" src={wordle} />
              <Card.Body>
                <Card.Title>Wordle</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="game-card"
              bg="dark"
              data-bs-theme="dark"
              onClick={() => handleGame(1)}
            >
              <Card.Img className="game-image" src={tictactoe} />
              <Card.Body>
                <Card.Title>Tic Tac Toe</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="game-card"
              bg="dark"
              data-bs-theme="dark"
              onClick={() => handleGame(2)}
            >
              <Card.Img className="game-image" src={connect4} />
              <Card.Body>
                <Card.Title>Connect 4</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="game-card"
              bg="dark"
              text="light"
              onClick={() => handleGame(3)}
            >
              <Card.Img className="game-image" src={checkers} />
              <Card.Body>
                <Card.Title>Checkers</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        {getGame()}
      </Modal>
    </div>
  );
}

export default Games;
