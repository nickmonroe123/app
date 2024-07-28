import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import streamlit_view from "../../Assets/Projects/streamlit_view.png";
import chatbot from "../../Assets/Projects/chatbot.jpg";
import movie_set from "../../Assets/Projects/movie_set.png";

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
              imgPath={movie_set}
              isBlog={false}
              title="Movie Universe"
              description="In progress, TBD to be the biggest app I have created."
              ghLink="https://github.com/nickmonroe123"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={streamlit_view}
              isBlog={false}
              title="Streamlit Image Classifier"
              description="Users simply drag and drop their images into the app’s intuitive interface, where a powerful convolutional neural network (CNN) processes them instantly. The app then displays the predicted category with a confidence score."
              ghLink="https://github.com/nickmonroe123/streamlit_image_classifier"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Verbal Chat Bot"
              description="Chatbot that listens to audio inputs and responds with remarkable accuracy using OpenAI’s advanced language models. This innovative chatbot leverages speech-to-text technology to transcribe spoken words into text in real-time."
              ghLink="https://github.com/nickmonroe123/VerbalChatBot"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
