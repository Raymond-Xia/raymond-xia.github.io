import { Button, Card, Col, Row } from "react-bootstrap";
import wordle from "./assets/wordle.png";
import tictactoe from "./assets/tictactoe.png";
import connect4 from "./assets/connect4.png";
import checkers from "./assets/checkers.png";

function Games() {
  return (
    <>
      <h1 className="display-5">Games</h1>
      <hr />
      <div className="grid-container" style={{ marginTop: "10px" }}>
        <Row>
          <Col>
            <Card>
              <Card.Img src={wordle} />
              <Card.Body>
                <Card.Title>Wordle</Card.Title>
                <Button href="#wordle" variant="primary">
                  Play Wordle
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img src={tictactoe} />
              <Card.Body>
                <Card.Title>Tic Tac Toe</Card.Title>
                <Button href="#tictactoe" variant="primary">
                  Play TicTacToe
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img src={connect4} />
              <Card.Body>
                <Card.Title>Connect 4</Card.Title>
                <Button href="#connect4" variant="primary">
                  Play Connect4
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img src={checkers} />
              <Card.Body>
                <Card.Title>Checkers</Card.Title>
                <Button href="#checkers" variant="primary">
                  Play Checkers
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <hr />
      <p className="text-muted">© 2024 Raymond Xia LLC. All rights reserved.</p>
    </>
  );
}

export default Games;
