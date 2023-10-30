import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/car/3.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Rent Ur Ways</h2>
              <p className="section__description">
                New to the game, but not new to a chanllenge. Muktar Mohamed is changing the game when it comes to renting a vehicle for the weekend or a week.
                <br />Our owner(Muktar Mohamed) has an understanding of the simplicity of renting a vehicle.
                A small business that gives its clients one-timing for bookings, reservations, and rescheduling.
                Helping customers getting a car for the weekend or a week made easily accessible for all.<br />
                Rent Ur Ways has options on delivery for vehicles or you an simply stop by and pick up your getaway car.
                Rent Ur Ways. The name itself. Tells you that there are many ways to rent. The idea was coined at a very young age. Making renting as easy as buying a pair of shoes.
                Mission state is No hossle at anything, but the hassle of customer satisfaction. MADE SIMPLE
              </p>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="add" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
