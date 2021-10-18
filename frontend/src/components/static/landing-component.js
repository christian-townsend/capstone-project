import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Carousel from "react-bootstrap/Carousel";
import uclogo from "../../images/university-of-canberra.svg";
import Row from "react-bootstrap/Row";
import loginIcon from "../../images/login.png";
import projectIcon from "../../images/project-carousel.jpg";

export default function Landing(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div class="fullpage">
      <Row>
        {/* main title card */}
        <div class="content-area col-xs-12 col-md-12 px-0">
          <div style={{ height: 450 }} class="card border-dark card-header">
            <div class="text-overlay-header col-xs-12 col-md-12">
              <h1 class="banner-tl">Welcome to the Capstone Project</h1>
              <div class="banner-text col-xs-12 col-sm-12 col-md-12">
                <p class="card-text">
                  The Technology Capstone Research Project provides the
                  opportunity for students undertake a technology focused
                  research project. The project will enable students to develop
                  their theoretical knowledge further in an area of interest,
                  and provide genuine business value in the processs.
                </p>
              </div>
            </div>
          </div>
          </div>
          <div style={{position:"relative"}}>
          <Carousel
            style={{ height: 350 }}
            activeIndex={index}
            onSelect={handleSelect}
          >
            <Carousel.Item style={{ height: "40vh" }}>
              <img
                className="d-block w-100"
                src={loginIcon}
                alt="Third slide"
                style={{ height: "auto", width: "auto" }}
              />
              <Carousel.Caption>
                <Button style={{ marginBottom: 250 }} variant="primary">
                  View Past Projects.
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "40vh" }}>
              <img
                className="d-block w-100"
                src={projectIcon}
                alt="Third slide"
                style={{ height: "auto", width: "auto" }}
              />
              <Carousel.Caption>
                <Button style={{ marginBottom: 250 }} variant="primary">
                  View Past Projects.
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "40vh" }}>
              <img
                className="d-block w-100"
                src={projectIcon}
                alt="Third slide"
                style={{ height: "auto", width: "auto" }}
              />
              <Carousel.Caption>
                <Button style={{ marginBottom: 250 }} variant="primary">
                  Login In.
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        
      </Row>
    </div>
  );
}
