import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/carlover.png";
import img1 from "../../Assets/mycv.png";
import img2 from "../../Assets/drlap.png";
import suicide from "../../Assets/flowere-commerc.png";
import shopApp from "../../Assets/shopApp.png";
import lastProj from "../../Assets/carSite.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img1}
              isBlog={false}
              title="CV Template"
              description="A personal CV template built using HTML and CSS for fun. You can use the GitHub repository to add your professional information and deploy it on any live server. The design is minimal and easy to customize."
              ghLink="https://github.com/TabarakCodeCraft/cv-website"
              demoLink="https://tabarakali-cv.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img2}
              isBlog={false}
              title="DR.Lab"
              description="A desktop application built using React.js and Electron for the Puertik team. The project helped me learn new API structures and how to handle a front-end application with SQLite database integration. You can download the app from the website to assist with laptop diagnostics."
              demoLink="https://www.drlab.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Car Lover"
              description="An online code and markdown editor built with React.js. The editor supports HTML, CSS, and JavaScript, allowing users to see an instant preview of their work. It also provides a markdown editor for README file creation with a toolbar and auto-save feature using Local Storage. The CSS and HTML structure ensures a clean UI with responsive design."
              ghLink="https://github.com/TabarakCodeCraft/Car-lover"
              demoLink="https://car-lover-bytota.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="e-Commerce Flowers"
              description="A fully responsive e-commerce platform for flower shopping, built using HTML and CSS for patients who need easy access to flower orders. It provides a simple and accessible design, ensuring a smooth user experience."
              ghLink="https://github.com/TabarakCodeCraft/E-Commerce-Flowers"
              demoLink="https://design-flowers-website.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopApp}
              isBlog={false}
              title="Shop Mobile App"
              description="A mobile shopping application built with React.js, designed specifically for mobile users. The app features a user-friendly interface, fast navigation, and optimized performance for a seamless shopping experience."
              ghLink="https://github.com/TabarakCodeCraft/shoppUi"
              demoLink="https://strong-task-by-toto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lastProj}
              isBlog={false}
              title="Rental Car"
              description="A car rental platform built using React.js, designed to assist patients in finding rental cars easily. The platform offers a simple interface with a smooth booking process and responsive layout for accessibility across devices."
              ghLink="https://github.com/TabarakCodeCraft/cars-website-in-react"
              demoLink="https://toto-cars-lover.netlify.app/"   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
