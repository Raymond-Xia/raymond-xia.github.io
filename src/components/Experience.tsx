import { Col, Row } from "react-bootstrap";
import ukg from "../assets/ukg.png";
import trustwave from "../assets/trustwave.png";
import blackberry from "../assets/blackberry.jpg";
import agfa from "../assets/agfa.png";
import symbility from "../assets/symbility.png";
import eventmobi from "../assets/eventmobi.png";
import resume from "../assets/RaymondXiaResume2024.pdf";

function Experience() {
  return (
    <div className="section">
      <h1 className="display-3">Experience</h1>
      <hr />
      <div className="grid-container">
        <Row className="company-row">
          <Col md="auto">
            <img className="company-icon" src={ukg} />
          </Col>
          <Col>
            <h2 className="experience-title">Full Stack Developer</h2>
            <Row>
              <Col>
                <h4>UKG</h4>
              </Col>
              <Col>
                <p style={{ textAlign: "right" }}>Sep 2022 - Dec 2022</p>
              </Col>
            </Row>
            <p>
              I developed production code for HR software using Java Spring Boot
              and Angular. Designed and demoed new features, participated in
              code reviews, and resolved complex multi-backend defects.
            </p>
            <Row xs="3" md="6" style={{ color: "grey" }}>
              <Col>Java</Col>
              <Col>TypeScript</Col>
              <Col>Spring Boot</Col>
              <Col>Angular</Col>
              <Col>PostgreSQL</Col>
              <Col>JUnit</Col>
            </Row>
          </Col>
        </Row>
        <Row className="company-row">
          <Col md="auto">
            <img className="company-icon" src={trustwave} />
          </Col>
          <Col>
            <h2 className="experience-title">Machine Learning Test Engineer</h2>
            <Row>
              <Col>
                <h4>Trustwave</h4>
              </Col>
              <Col>
                <p style={{ textAlign: "right" }}>Jan 2022 - Apr 2022</p>
              </Col>
            </Row>
            <p>
              I extended the Python Robot test suites for the training and
              deployment of 8 machine learning security models. Integrated
              continuous training components, reworked data ingestion, and
              produced video guides on machine learning model training and
              deployment.
            </p>
            <Row xs="3" md="6" style={{ color: "grey" }}>
              <Col>Python</Col>
              <Col>Robot</Col>
              <Col>MySQL</Col>
              <Col>Jenkins</Col>
              <Col>Hadoop</Col>
              <Col>Apache Storm</Col>
            </Row>
          </Col>
        </Row>
        <Row className="company-row">
          <Col md="auto">
            <img className="company-icon" src={blackberry} />
          </Col>
          <Col>
            <h2 className="experience-title">Full Stack Developer</h2>
            <Row>
              <Col>
                <h4>BlackBerry</h4>
              </Col>
              <Col>
                <p style={{ textAlign: "right" }}>
                  Jun 2020 - Aug 2020, Jan 2021 - Apr 2021
                </p>
              </Col>
            </Row>
            <p>
              I developed and maintained production software for the Mobile
              Threat Defense service using Java Spring Boot and React. Designed
              new features, produced a SQL database cleaner, and extended the
              TestNG test suite.
            </p>
            <Row xs="3" md="6" style={{ color: "grey" }}>
              <Col>Java</Col>
              <Col>JavaScript</Col>
              <Col>Spring Boot</Col>
              <Col>React</Col>
              <Col>MySQL</Col>
              <Col>TestNG</Col>
            </Row>
          </Col>
        </Row>
        <Row className="company-row">
          <Col md="auto">
            <img className="company-icon" src={agfa} />
          </Col>
          <Col>
            <h2 className="experience-title">Automated Test Developer</h2>
            <Row>
              <Col>
                <h4>AGFA HealthCare</h4>
              </Col>
              <Col>
                <p style={{ textAlign: "right" }}>Sep 2019 - Dec 2019</p>
              </Col>
            </Row>
            <p>
              I designed JUnit Selenium test suites for new features and vetted
              new releases for medical imaging software. Performed regression
              testing, produced detailed reports/solutions for test failures,
              and created a Java test suite filter tool to enhance debugging.
            </p>
            <Row xs="3" md="6" style={{ color: "grey" }}>
              <Col>Java</Col>
              <Col>JUnit</Col>
              <Col>Selenium</Col>
              <Col>Jenkins</Col>
              <Col>Bash</Col>
              <Col>Agile</Col>
            </Row>
          </Col>
        </Row>
        <Row className="company-row">
          <Col md="auto">
            <img className="company-icon" src={symbility} />
          </Col>
          <Col>
            <h2 className="experience-title">Test Engineer</h2>
            <Row>
              <Col>
                <h4>Symbility Intersect</h4>
              </Col>
              <Col>
                <p style={{ textAlign: "right" }}>Sep 2018 - Dec 2018</p>
              </Col>
            </Row>
            <p>
              I pioneered the iOS automated test suite and wrote/analyzed over
              3000 test cases for Fortune 500 mobile applications. Utilized
              creative tools to accelerate manual test verification speed and
              managed deadlines efficiently.
            </p>
            <Row xs="3" md="6" style={{ color: "grey" }}>
              <Col>Swift</Col>
              <Col>XCUI</Col>
              <Col>iOS</Col>
              <Col>Android</Col>
              <Col>Excel</Col>
              <Col>Agile</Col>
            </Row>
          </Col>
        </Row>
        <Row className="company-row">
          <Col md="auto">
            <img className="company-icon" src={eventmobi} />
          </Col>
          <Col>
            <h2 className="experience-title">Software Developer</h2>
            <Row>
              <Col>
                <h4>EventMobi</h4>
              </Col>
              <Col>
                <p style={{ textAlign: "right" }}>Jan 2018 - Apr 2018</p>
              </Col>
            </Row>
            <p>
              I investigated and resolved numerous Angular defects in the event
              management software and refactored inconsistencies in the
              JavaScript codebase, improving app quality and smoothing out
              future development.
            </p>
            <Row xs="3" md="6" style={{ color: "grey" }}>
              <Col>JavaScript</Col>
              <Col>Angular</Col>
              <Col>Selenium</Col>
              <Col>Nightwatch</Col>
              <Col>Git</Col>
              <Col>Agile</Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div style={{ textAlign: "center" }}>
        <a className="button-bw" href={resume} target="_blank">
          View Resume
        </a>
      </div>
    </div>
  );
}

export default Experience;
