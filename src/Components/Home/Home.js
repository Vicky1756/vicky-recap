import React from "react";
import gifImage from "../../Assets/vinyl.gif";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import About from "../About/About";
import Bingo from "../Bingo/Bingo";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <img src={gifImage} alt="" className="gif-img" />
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">2023 HIGHLIGHTS</h1>
            </Col>
          </Row>
        </Container>
      </Container>
      <Bingo/>
      <About/>
    </section>
  );
}

export default Home;
