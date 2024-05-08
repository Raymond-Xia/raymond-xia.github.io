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
            <Card.Img
              variant="top"
              src={Github}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <Card.Body>
              <Card.Title>GitHub</Card.Title>
              <Button href="https://github.com/raymond-xia" variant="primary">
                Go to GitHub
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 mb-4">
          <Card>
            <Card.Img
              variant="top"
              src={LinkedIn}
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <Card.Body>
              <Card.Title>LinkedIn</Card.Title>
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
