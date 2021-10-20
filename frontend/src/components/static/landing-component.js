import React, { useState } from "react";
import Button from "@mui/material/Button";
import Carousel from "react-bootstrap/Carousel";
import uclogo from "../../images/university-of-canberra.svg";
import Row from "react-bootstrap/Row";
import loginIcon from "../../images/login.png";
import projectIcon from "../../images/project-carousel.jpg";
import sponsorIcon from "../../images/become_a_sponsor.png";

export default function Landing() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div class="fullpage">
      <div>
        <Row>
          {/* main title card */}
          <div style={{ height: 325 }} class="card border-dark card-header">
            <div class="text-overlay-header col-xs-12 col-md-12">
              <h1 class="banner-tl" style={{ marginTop: -30 }}>
                Welcome to the Capstone Project
              </h1>
              <p class="card-text">
                The Technology Capstone Research Project provides the
                opportunity for students undertake a technology focused research
                project. The project will enable students to develop their
                theoretical knowledge further in an area of interest, and
                provide genuine business value in the processs.
              </p>
            </div>
          </div>
        </Row>
        <Row>
          <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item style={{ height: "30vh" }}>
                <h1
                  style={{ marginTop: 40, color: "white", textAlign: "center" }}
                >
                  View our past Projects.
                </h1>
                <h1
                  style={{ marginTop: 40, color: "white", textAlign: "center" }}
                >
                  <Button variant="primary" size="lg">
                    Sign up here.
                  </Button>
                </h1>
              </Carousel.Item>
              <Carousel.Item style={{ height: "30vh" }}>
                <h1
                  style={{ marginTop: 40, color: "white", textAlign: "center" }}
                >
                  Want to become a Project Sponsor?
                </h1>
                <h1
                  style={{ marginTop: 40, color: "white", textAlign: "center" }}
                >
                  <Button variant="primary" size="lg">
                    Sign up here.
                  </Button>
                </h1>
              </Carousel.Item>
              <Carousel.Item style={{ height: "30vh" }}>
                <h1
                  style={{ marginTop: 40, color: "white", textAlign: "center" }}
                >
                  Already have an account?
                </h1>
                <h1
                  style={{ marginTop: 40, color: "white", textAlign: "center" }}
                >
                  <Button variant="primary" size="lg">
                    Sign in.
                  </Button>
                </h1>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
      </div>
    </div>
  );
}
