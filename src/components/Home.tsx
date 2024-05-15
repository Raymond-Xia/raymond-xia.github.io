import Image from "react-bootstrap/Image";
import Raymond from "../assets/raymond_xia.png";
import resumeFile from "../assets/RaymondXiaResume2024.pdf";
import Github from "../assets/github.jpg";
import LinkedIn from "../assets/linkedin.png";
import arrow from "../assets/arrow.png";
import mail from "../assets/mail.png";
import page from "../assets/page.png";
import { Col, Row } from "react-bootstrap";

function Home() {
  return (
    <div>
      <div className="jumbotron" style={{ textAlign: "center" }}>
        <Row>
          <Col>
            <h1
              style={{
                textAlign: "left",
                marginBottom: "50px",
                fontSize: "4rem",
              }}
            >
              Hi, I'm Raymond.
            </h1>
            <h1 style={{ textAlign: "right" }}>Full Stack Developer.</h1>
            <h1 style={{ textAlign: "right", marginBottom: "50px" }}>
              Computer Engineer.
            </h1>
            <br />
          </Col>
          <Col
            style={{
              textAlign: "center",
              maxWidth: "500px",
            }}
          >
            <Image
              src={Raymond}
              style={{
                width: "300px",
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <p style={{ textAlign: "center", marginTop: "5px" }}>
              I am a Computer Engineering graduate from the University of
              Waterloo with a passion for software development. Here you can
              find out more about me, my technical skills, and see some projects
              I've created.
            </p>
          </Col>
          <Col md="auto"></Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto" xs="10">
            <p
              style={{
                textAlign: "center",
                marginTop: "50px",
                marginBottom: "50px",
              }}
            >
              You can also contact/find me here
            </p>
            <Row className="justify-content-md-center">
              <Col xs lg="3">
                <a href="mailto:ray.xia99@gmail.com">
                  <img className="contact-icon" src={mail} />
                </a>
              </Col>
              <Col xs lg="3">
                <a href="https://github.com/raymond-xia">
                  <img className="contact-icon" src={Github} />
                </a>
              </Col>
              <Col xs lg="3">
                <a href="https://linkedin.com/in/raymond-xia">
                  <img className="contact-icon" src={LinkedIn} />
                </a>
              </Col>
              <Col xs lg="3">
                <a href={resumeFile}>
                  <img className="contact-icon" src={page} />
                </a>
              </Col>
            </Row>
          </Col>
          <Col
            style={{ textAlign: "left", maxWidth: "50px", paddingLeft: "0" }}
          >
            <img
              src={arrow}
              style={{ maxHeight: "100px", position: "relative", top: "35%" }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
