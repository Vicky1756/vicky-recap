import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
function About() {
  return (
    <Container fluid className="about-section" id="about">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingBottom: "50px",
            }}
          >
            <h1 className="About-content">
              About me
            </h1>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
