import { React, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { CardsCarousel } from "./NewComponent/CardsCarousel";

const Home = () => {
  useEffect(() => {
    document.title = "Home || Hire-Torch ";
  }, []);

  return (
    <div class="Home_class">
      <Row>
        <Col md={5}>
          <h1 class="hero-title roboto animate__animated animate__fadeIn animate__delay-1s">
            Welcome To <br />
            Hire-Torch
          </h1>
          {/* Where Talent <br/>Meets Opportunity */}
          <p class="hero-info text-grey">
            " A Good Life Begins With A Good Company " <br />
            What you Think ?? If Yes ! <br />
            Then Your Dream Coming Is Waiting For You <br />
            Complete Your Profile Today ....
          </p>
          <br />
          <a
            href="/student-login-ant"
            class="btn btn-success btn-lg btn-rounded btn-extended"
          >
            <span class="text-theme">Login To Our Protal </span>
          </a>
        </Col>
        <Col md={7}>
          <CardsCarousel />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
