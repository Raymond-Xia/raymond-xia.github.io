import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Github from "../assets/github-logo.png";
import LinkedIn from "../assets/linkedin-logo.png";

function Contact() {
  return (
    <div className="section">
      <h1 className="display-5">Skills</h1>
      <hr />
      <p>Java</p>
      <div className="skillbar">
        <div className="skills" style={{ width: "90%" }}></div>
      </div>

      <p>Python</p>
      <div className="skillbar">
        <div className="skills" style={{ width: "90%" }}></div>
      </div>

      <p>JavaScript</p>
      <div className="skillbar">
        <div className="skills" style={{ width: "85%" }}></div>
      </div>

      <p>TypeScript</p>
      <div className="skillbar">
        <div className="skills" style={{ width: "85%" }}></div>
      </div>

      <p>HTML/CSS</p>
      <div className="skillbar">
        <div className="skills" style={{ width: "85%" }}></div>
      </div>
    </div>
  );
}

export default Contact;
