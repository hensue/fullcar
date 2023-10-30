import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";


const socialLinks = [
  // {
  //   url: "#",
  //   icon: "ri-facebook-line",
  // },
  {
    url: "https://instagram.com/renturways",
    icon: "ri-instagram-line",
  },
  // {
  //   url: "#",
  //   icon: "ri-linkedin-line",
  // },
  // {
  //   url: "#",
  //   icon: "ri-twitter-line",
  // },
];

const quickLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About Us",
  },
  {
    path: "/cars",
    display: "View Cars",
  },
  // {
  //   path: "/blogs",
  //   display: "Blog",
  // },

  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    Rent UR <br /> WAYS
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            A place where renting made simple
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">Nashville, TN 37210 United States</p>
              <p className="office__info">Phone: +16152006336</p>

              <p className="office__info">Email: Muktarmohamed@renturways.com</p>

              <p className="office__info">Office Time: 8am - 5pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
            <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <a
                      href={item.url}
                      // key={index}
                      // className="social__link-icon1"
                    >
                      <i class={item.icon}></i>
                    </a>
                  ))}
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>{year}, Developed by
                Lim Kim San. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
