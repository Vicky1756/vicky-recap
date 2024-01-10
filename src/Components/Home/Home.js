import React from "react";
import gifImage from "../../Assets/vinyl.gif";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import About from "../About/About";
import Bingo from "../Bingo/Bingo";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <div className="img_container">
            <img src={gifImage} alt="" className="gif-img" />
            <Link to="/card" className="buttonHome buttonDark">
              click
            </Link>
          </div>
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">2023 HIGHLIGHTS</h1>
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
      <Bingo />
    </section>
  );
}

export default Home;
