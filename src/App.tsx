import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Games from "./components/Games";
import "./App.css";

import { useCallback } from "react";
import Particles from "react-particles";
import type { Container as Con, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Con | undefined) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Navbar
        style={{ background: "rgba(0,0,0,0.9)" }}
        data-bs-theme="dark"
        expand="lg"
        sticky="top"
      >
        <Container>
          <Navbar.Brand
            href="/#"
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
          >
            Raymond Xia
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Link href="/#">Home</Nav.Link>
              <Nav.Link href="/#experience">Experience</Nav.Link>
              <Nav.Link href="/#projects">Projects</Nav.Link>
              <Nav.Link href="/#games">Games</Nav.Link>
              <Nav.Link href="/#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <div className="main-section" id="home">
          <Home />
        </div>
        {/* <div className="main-section" id="contact">
          <Contact />
        </div> */}
        <div className="main-section" id="experience">
          <Experience />
        </div>
        <div className="main-section" id="projects">
          <Projects />
        </div>
        <div className="main-section" id="games">
          <Games />
        </div>
      </Container>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "",
            },
          },
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          fpsLimit: 120,
          particles: {
            number: {
              value: 355,
              density: {
                enable: true,
                value_area: 789.1476416322727,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.48927153781200905,
              random: false,
              anim: {
                enable: true,
                speed: 0.2,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
        }}
      />
    </>
  );
}

export default App;
