import { Button, Card, Col, Container, Row } from "react-bootstrap";
import snaplapse from "../assets/logo.png";
import crewmate from "../assets/crewmate.png";
import knight from "../assets/knight.png";
import spotify from "../assets/spotify.png";

function Projects() {
  return (
    <div className="section">
      <h1 className="display-5">Projects</h1>
      <hr />
      <Container>
        <Row xs="2" md="4">
          <Col>
            <Card bg="dark" data-bs-theme="dark">
              <Card.Img className="card-image" src={snaplapse} />
              <Card.Body>
                <Card.Title>SnapLapse</Card.Title>
                <Button
                  href="https://github.com/snaplapse"
                  target="_blank"
                  variant="primary"
                >
                  SnapLapse
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="dark" data-bs-theme="dark">
              <Card.Img className="card-image" src={crewmate} />
              <Card.Body>
                <Card.Title>Among Bots</Card.Title>
                <Button
                  href="https://github.com/Raymond-Xia/among-bots"
                  target="_blank"
                  variant="primary"
                >
                  Among Bots
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="dark" data-bs-theme="dark">
              <Card.Img className="card-image" src={knight} />
              <Card.Body>
                <Card.Title>Chess</Card.Title>
                <Button
                  href="https://github.com/Raymond-Xia/chess"
                  target="_blank"
                  variant="primary"
                >
                  Chess
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="dark" data-bs-theme="dark">
              <Card.Img className="card-image" src={spotify} />
              <Card.Body>
                <Card.Title>Spotify Stats</Card.Title>
                <Button
                  href="https://github.com/Raymond-Xia/spotify-stats"
                  target="_blank"
                  variant="primary"
                >
                  Spotify Stats
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
