import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from "axios";


export default function SponsorFunction(props) {
    
    return(
        <div class="fullpage">
        <row>
          {/* main title card */}
          <div class="content-area col-xs-12 col-md-12 px-0">
            <div class="card border-dark sponsor-card-header">
              <div class="text-overlay-header col-xs-12 col-md-12">
                <h1 class="banner-tl">Project Sponsorship</h1>
                <div class="banner-text col-xs-12 col-sm-12 col-md-12">
                  <p class="card-text">
                    Sponsoring your project through the University of Canberra IT Capstone units provides a wide range of benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*Login/Projects/Register Cards*/}
          <Container fluid style={{ backgroundColor: "white" }}>
            <Row style={{height:"300px"}}>
              <Col >
              <div style={{ padding:"10px 30px 10px 30px"}}>
                <div class ="row-header">Academic Excellence</div>
                </div>
                <div>
                <div class="row-content">Our final year students are eager to put their skills to the test, in pursuit of a place in the Capstone Project Expo.</div>
                  </div>
                  <div></div>

                
              </Col>
              <Col >
              <div style={{ padding:"10px 30px 10px 30px"}}>
              <div class ="row-header">Talent Scouting</div>
                </div>
                <div>
                <div class="row-content">The University of Canberra prides itself on ensuring our graduates are job-ready. Could your next star be starting their Capstone Project journey?</div>
                  </div>

                
              </Col>
              <Col >
              <div style={{ padding:"10px 30px 10px 30px"}}>
              <div class ="row-header">Technical Expertise</div>
                </div>
                <div>
                <div class="row-content">Our students posess a wide range of technical expertise, from artificial intelligence to robotics. 
                Whatever your project, we'll likely have the right person for you!</div>
                  </div>

                
              </Col>
              <Col >
              <div style={{ padding:"10px 30px 10px 30px"}}>
                <div class ="row-header">A rich history</div>
                </div>
                <div>
                <div class="row-content">The University of Canberra currently ranks at 170th place in the Times Higher Education (THE) World University Rankings for 2022. Our students 
                are keen to further establish a strong reputation for our institution.</div>
                  </div>

                
              </Col>
            </Row>
          </Container>


           
         {/*  <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header><h3 style={{ fontFamily: "garamond" }}>Want To Sponsor A Project?</h3></Accordion.Header>
              <Accordion.Body>
                The University of Canberra welcomes ideas from industry for
                technology projects that could be completed, by our students, as
                part of the Capstone Project.
                <Link to="/login">
                  <Button variant="outlined">Submit a Project</Button>
                </Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><h3 style={{ fontFamily: "garamond" }}>Check Out The Past Projects!</h3></Accordion.Header>
              <Accordion.Body>
                Our students participate in projects with real industry value. Check out some of the work that's already been done!
                <Link to="/login">
                  <Button variant="outlined">View Projects</Button>
                </Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header><h3 style={{ fontFamily: "garamond" }}>Login to your Account</h3></Accordion.Header>
              <Accordion.Body>
                Already have an account? Login here.
                <Link to="/login">
                  <Button variant="outlined">Login</Button>
                </Link>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>  */}
        </row>
      </div>
    );
  }
