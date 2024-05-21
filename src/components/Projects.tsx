import { Card, Col, Container, Row } from "react-bootstrap";
import snaplapse from "../assets/snaplapse.png";
import bots from "../assets/bots.png";
import knight from "../assets/knight.png";
import spotify from "../assets/spotify.png";

function Projects() {
  return (
    <div className="section">
      <h1 className="display-3">Projects</h1>
      <hr />
      <Container>
        <Row xs="1" md="4">
          <Col>
            <a
              href="https://github.com/raymond-xia/snaplapse-android"
              target="_blank"
              style={{
                textDecoration: "none",
              }}
            >
              <Card bg="dark" data-bs-theme="dark">
                <Card.Img className="card-image" src={snaplapse} />
                <Card.Body>
                  <Card.Title>SnapLapse</Card.Title>
                  <Card.Text>
                    Create photo timelapses of anything with anyone, anywhere.
                  </Card.Text>
                  <Card.Text style={{ color: "grey" }}>
                    Kotlin, Python, Pandas, Scikit-learn
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col>
            <a
              href="https://github.com/raymond-xia/among-bots"
              target="_blank"
              style={{
                textDecoration: "none",
              }}
            >
              <Card bg="dark" data-bs-theme="dark">
                <Card.Img className="card-image" src={bots} />
                <Card.Body>
                  <Card.Title>Among Bots</Card.Title>
                  <Card.Text>
                    Practice math to survive the endless waves of robots!
                  </Card.Text>
                  <Card.Text style={{ color: "grey" }}>C#, Unity</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col>
            <a
              href="https://github.com/raymond-xia/spotify-stats"
              target="_blank"
              style={{
                textDecoration: "none",
              }}
            >
              <Card bg="dark" data-bs-theme="dark">
                <Card.Img className="card-image" src={spotify} />
                <Card.Body>
                  <Card.Title>Spotify Stats</Card.Title>
                  <Card.Text>
                    Keep track of all your most listened-to songs on Spotify.
                  </Card.Text>
                  <Card.Text style={{ color: "grey" }}>
                    Node, JavaScript, HTML, CSS
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col>
            <a
              href="https://github.com/raymond-xia/chess"
              target="_blank"
              style={{
                textDecoration: "none",
              }}
            >
              <Card bg="dark" data-bs-theme="dark">
                <Card.Img className="card-image" src={knight} />
                <Card.Body>
                  <Card.Title>Chess</Card.Title>
                  <Card.Text>The timeless game created from scratch.</Card.Text>
                  <Card.Text style={{ color: "grey" }}>C#, Unity</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <a className="button-bw" href="https://github.com/raymond-xia/">
            Go to GitHub
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Projects;
