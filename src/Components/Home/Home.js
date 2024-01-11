import React, { useState } from "react";
import gifImage from "../../Assets/vinyl.gif";
import popImg from "../../Assets/boom.gif";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import About from "../About/About";
import Bingo from "../Bingo/Bingo";
import Fortune from "../Fortune/Fortune";
import Navbar from "./Navbar/Navbar";

function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <section>
       <Navbar />
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <div className="img_container">
            <img src={gifImage} alt="" className="gif-img" />
            <button className="buttonHome buttonDark" onClick={togglePopup}>
              Click
            </button>
            <div className={`popup ${showPopup ? "visible" : ""}`} id="popup">
              <div className="popup-inner">
                <div className="popup__text">
                  <h1>Happy Anniversary</h1>
                  <img src={popImg} alt="" className="pop-img" />
                  <p>
                   ' I'm so glad you exist.'
                   <br />
                   'Vicky'
                  </p>
                  
                </div>
                <button className="popup__close" onClick={togglePopup}>
                  X
                </button>
              </div>
            </div>
          </div>

          <Row>
            <Col md={7} className="home-header">
              <h1 className="home-heading">MASSAGE FROM PROPHET BOG</h1>
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
      <Fortune />
      <Bingo />
    
    </section>
  );
}

export default Home;
