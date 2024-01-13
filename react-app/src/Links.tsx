import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Github from "./assets/github-logo.png";
import LinkedIn from "./assets/linkedin-logo.png";

function Links() {
  return (
    <>
      <div className="row">
        <div className="col-lg-3 mb-4">
          <Card>
            <Card.Img variant="top" src={Github} style={{ width: "18rem" }} />
            <Card.Body>
              <Card.Title>GitHub</Card.Title>
              <Card.Text>Click to check out my GitHub.</Card.Text>
              <Button href="https://github.com/raymond-xia" variant="primary">
                Go to GitHub
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 mb-4">
          <Card>
            <Card.Img variant="top" src={LinkedIn} style={{ width: "18rem" }} />
            <Card.Body>
              <Card.Title>LinkedIn</Card.Title>
              <Card.Text>Click to check out my LinkedIn.</Card.Text>
              <Button
                href="https://linkedin.com/in/raymond-xia"
                variant="primary"
              >
                Go to LinkedIn
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Links;
