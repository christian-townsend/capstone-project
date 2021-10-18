import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navbar from "./navbar-component";
import Badge from "react-bootstrap/Badge";
import { render } from "react-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { fontSize } from "@mui/system";

export default function PastProjectsFunction(props) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:5000/projects", {
        withCredentials: true,
      });
      setProjects(result.data);
      console.log(result.data);
    })();
  }, []);

    return (
      <div class="fullpage">
        <row>
        <div class="content-area col-xs-12 col-md-12 px-0">
            <div class="card border-dark past-project-header">
              <div class="text-overlay-header col-xs-12 col-md-12">
                <h1 class="banner-tl" style={{color:"white"}}>Explore our Past Projects</h1>
                <div class="banner-text col-xs-12 col-sm-12 col-md-12">
                <p class="card-text">Check out the previous projects that our students have accomplished through the years</p>
                </div>
              </div>
            </div>
          </div>

          {/*Banner Logo*/}

        {/*Body*/}
        {projects.map((project) => {
        if(project.expo) {
          return(
        <Container fluid>
          <Row style={{backgroundColor:"white", borderBottom:"1px solid grey", padding:"10px 5px 10px 10px"}}>
            <Col xs={8}>
            <h3 class="title" style={{color:"grey", fontFamily:"Nunito"}}>{project.title}</h3>
            <p style={{fontFamily:"Nunito"}}>{project.description}</p>
            </Col>
            {/* image goes here */}
            <Col>
            
            </Col>
          </Row>
          </Container>)
      }})}
      
      </row>
        <div class="wrapper-body">
          <div class="accordion" id="accordionBody">
            {/*Dropdown 1*/}
              <div class="accordion-item">
                <h1 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <p class="accordion-title">Projects of 2021</p>
                  </button>
                </h1>
                {/*Dropdown Subheading 1*/}
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionBody">
                    <div class="card" id="child1">
                      <div class="accordion-sub-item">
                        <h2 class="accordion-header" id="SubHeadingOne">
                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSubOne" aria-expanded="true" aria-controls="collapseSubOne">
                            <p class="subtext">Semester 1</p>
                          </button>
                        </h2>
                        {/*Dropdown Subheading 1 Text*/}
                        <div id="collapseSubOne" class="accordion-collapse collapse" aria-labelledby="subtextOne" data-bs-parent="#collapseSubOne">
                          <p>These are the past projects of Semester 1 2021</p>
                          {/*INSERT TABLE HERE*/}
                        </div>
                      </div>
                    </div>
                </div>
                  {/*Dropdown Subheading 2*/}
                  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionBody">
                    <div class="card" id="child1">
                      <div class="accordion-sub-item">
                        <h2 class="accordion-header" id="SubHeadingTwo">
                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSubTwo" aria-expanded="true" aria-controls="collapseSubTwo">
                          <p class="subtext">Semester 2</p>
                          </button>
                        </h2>
                        {/*Dropdown Subheading 2 Text*/}
                        <div id="collapseSubTwo" class="accordion-collapse collapse" aria-labelledby="subtextTwo" data-bs-parent="#collapseSubTwo">
                          <p>These are the past projects of Semester 2 2021</p>
                          {/*INSERT TABLE HERE*/}
                        </div>
                      </div>
                    </div>
                </div>

              {/*////////////////////////////////////////////*/}

              {/*Dropdown 2*/}
              <div class="accordion-item">
                <h1 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <p class="accordion-title">Projects of 2020</p>
                  </button>
                </h1>
                  {/*Dropdown Subheading 3*/}
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionBody">
                    <div class="card" id="child1">
                      <div class="accordion-sub-item">
                        <h2 class="accordion-header" id="SubHeadingThree">
                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSubThree" aria-expanded="true" aria-controls="collapseSubThree">
                          <p class="subtext">Semester 1</p>
                          </button>
                        </h2>
                        {/*Dropdown Subheading 3 Text*/}
                        <div id="collapseSubThree" class="accordion-collapse collapse" aria-labelledby="subtextThree" data-bs-parent="#collapseSubThree">
                          <p>These are the past projects of Semester 1 2020</p>
                          {/*INSERT TABLE HERE*/}
                        </div>
                      </div>
                    </div>
                </div>
                {/*Dropdown Subheading 4*/}
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionBody">
                    <div class="card" id="child1">
                      <div class="accordion-sub-item">
                        <h2 class="accordion-header" id="SubHeadingFour">
                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSubFour" aria-expanded="true" aria-controls="collapseSubFour">
                          <p class="subtext">Semester 2</p>
                          </button>
                        </h2>
                        {/*Dropdown Subheading 4 Text*/}
                        <div id="collapseSubFour" class="accordion-collapse collapse" aria-labelledby="subtextFour" data-bs-parent="#collapseSubFour">
                          <p>These are the past projects of Semester 2 2020</p>
                          {/*INSERT TABLE HERE*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
      </div>
    )}
       

