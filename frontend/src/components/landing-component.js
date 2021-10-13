import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Account extends Component {

  render() {

    return (
      <div class="fullpage">
        <row>
          {/* main title card */}
          <div class="content-area col-xs-12 col-md-12 px-0">
            <div class="card border-dark card-header">
              <div class="text-overlay-header col-xs-12 col-md-12">
                <h1 class="banner-title">Welcome to the Capstone Project</h1>
                <div class="banner-text col-xs-12 col-sm-12 col-md-12">
                  <p class="card-text">
                    The Technology Capstone Research Project provides the
                    opportunity for students undertake a technology focused
                    research project. The project will enable students to
                    develop their theoretical knowledge further in an area of
                    interest. Through critical analysis and synthesis of
                    research findings, the students will be able to apply their
                    knowledge in a unique research context to understand how
                    research could improve and advance the body of knowledge
                    related to technology.
                  </p>
                  <Link to="/about">
                    <button className="btn btn-primary">Find Out More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/*Login/Projects/Register Cards*/}
          <Container fluid style={{ backgroundColor: "white" }}>
            <Row>
              <Col >
              <div style={{ padding:"10px 10px 10px 10px"}}>
                <div class ="row-header">Want to sponsor a project?</div>
                </div>
                <div>
                <div class="row-content">The University of Canberra welcomes ideas from industry for
                  technology projects that could be completed, by our students, as
                  part of the Capstone Project.</div>
                  </div>
                  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', padding:"10px 10px 10px 10px"}}>
                  <Link to="/login">
                    <Button variant="outlined">Submit a Project</Button>
                  </Link>
                  </div>
                
              </Col>
              <Col >
              <div style={{ padding:"10px 10px 10px 10px"}}>
              <div class ="row-header">Check out past projects</div>
                </div>
                <div>
                <div class="row-content">Our students participate in projects with real industry value. 
                Check out some of the work that's already been done!</div>
                  </div>
                  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', padding:"10px 10px 10px 10px"}}>
                  <Link to="/login">
                    <Button variant="outlined">View Projects</Button>
                  </Link>
                  </div>
                
              </Col>
              <Col >
              <div style={{ padding:"10px 10px 10px 10px"}}>
              <div class ="row-header">Login to your account</div>
                </div>
                <div>
                <div class="row-content">Already have an account? Login here.</div>
                  </div>
                  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', padding:"10px 10px 10px 10px"}}>
                  <Link to="/login">
                    <Button variant="outlined">Login</Button>
                  </Link>
                  </div>
                
              </Col>
              
            </Row>
          </Container>


          {/* 
          <Accordion>
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
          </Accordion> */}
        </row>
      </div>
    );
  }
}
