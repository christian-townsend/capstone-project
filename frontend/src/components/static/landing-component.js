import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import uclogo from "../../images/university-of-canberra.svg";

export default function Landing(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div class="fullpage">
      <row>
        {/* main title card */}
        <div class="content-area col-xs-12 col-md-12 px-0">
          <div style={{ height: 500 }} class="card border-dark card-header">
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
          <Carousel
            style={{ backgroundColor: "white", height: 200 }}
            activeIndex={index}
            onSelect={handleSelect}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Already have an account? Login here.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="frontend/src/images/login.png"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3 style={{ color: "white" }}>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p style={{ backgroundColor: "white", color: "black" }}>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </row>
    </div>
  );
}
