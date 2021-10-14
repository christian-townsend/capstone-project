import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from "axios";

export default function AboutFunction(props) {
    
    return(
        <div class="fullpage">
        <row>
          {/* main title card */}
          <div class="content-area col-xs-12 col-md-12 px-0">
            <div class="card border-dark about-card-header">
              <div class="text-overlay-header col-xs-12 col-md-12">
                <h1 class="banner-tl" style={{color:"white"}}>About the Capstone Project</h1>
                <div class="banner-text col-xs-12 col-sm-12 col-md-12">
                  <p class="card-text">
                    Culmination of the academic curriculum, where students demonstrate their talents and intellecutal experience to solve real-life engineering or IT problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </row>
          <Container fluid style={{ backgroundColor: "white" }}>
            <Row style={{paddingBottom:"5px", borderBottom:"1px solid #e6e6e6", backgroundColor:"#f5f5f5"}}>
              <Col >
              <div style={{ padding:"10px 30px 10px 30px"}}>
                <div class ="row-header">Software</div>
                </div>
                <div>
                <div class="row-content">Our Information Technology and Software Engineering students are highly skilled in a wide range of technical areas. From web design to artificial intelligence, we've got it covered.</div>
                  </div>
                  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', padding:"20px 10px 10px 10px"}}>
                  </div>
                
              </Col>
              <Col>
              </Col>
              </Row>
              <Row style={{paddingBottom:"5px", borderBottom:"1px solid #e6e6e6"}}>
              <Col>
              </Col>
              <Col >
              <div style={{ padding:"10px 30px 10px 30px"}}>
                <div class ="row-header">Robotics</div>
                </div>
                <div>
                <div class="row-content">Students can access our dedicated robotics lab for a wide range of projects, such as robotic process automation.</div>
                  </div>                
              </Col>
              </Row>
              <Row style={{paddingBottom:"5px", borderBottom:"1px solid #e6e6e6", backgroundColor:"#f5f5f5"}}>
              <Col >
              <div style={{ padding:"10px 30px 10px 30px"}}>
                <div class ="row-header">Research</div>
                </div>
                <div>
                <div class="row-content">Not every project submission needs to be a technical undertaking. Each semester we have a new cohort of eager researchers, ready to work on your topic.</div>
                  </div>
                  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', padding:"20px 10px 10px 10px"}}>
                  </div>
                
              </Col>
              <Col>
              </Col>
              </Row>
              </Container>
          </div>
    );
}

/*</row>export default class About extends Component {
    render (){
        return (
            <div className="container-fluid">
                <div class="Banner-Top col-xs col-sm col-md ml-0 mr-0">
                    <div class="row mt-5">
                        <div className="About-Banner col-lg col-md">
                            <h1 id="banner-header">About the Capstone Project</h1>
                            <p id="banner-text">The Technology Capstone Research Project
                                    provides the opportunity for students undertake a technology
                                    focused research project. The project will enable
                                    students to develop their theoretical knowledge further in
                                    an area of interest. Through critical analysis and synthesis
                                    of research findings, the students will be able to apply their
                                    knowledge in a unique research context to understand how research
                                    could improve and advance the body of knowledge related to technology.</p>
                        </div>
                </div>
            </div>

        </div>
        )
    }
}*/