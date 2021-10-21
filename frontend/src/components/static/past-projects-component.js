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
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
              <h1 class="banner-tl" style={{ color: "white" }}>
                Explore our Past Projects
              </h1>
              <div class="banner-text col-xs-12 col-sm-12 col-md-12">
                <p class="card-text">
                  Check out the previous projects that our students have
                  accomplished through the years
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Banner Logo*/}

      </row>
      <div class="wrapper-body" style={{ marginTop: -150 }}>
        <div class="accordion" id="accordionBody">
          {/*Dropdown 1*/}
          <div class="accordion-item">
            <h1 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <p class="accordion-title">Projects of 2021</p>
              </button>
            </h1>
            {/*Dropdown Subheading 1*/}
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionBody"
            >
              <div class="card" id="child1">
                <div class="accordion-sub-item">
                  <h2 class="accordion-header" id="SubHeadingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSubOne"
                      aria-expanded="true"
                      aria-controls="collapseSubOne"
                    >
                      <p class="subtext">Semester 1</p>
                    </button>
                  </h2>
                  {/*Dropdown Subheading 1 Text*/}
                  <div
                    id="collapseSubOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="subtextOne"
                    data-bs-parent="#collapseSubOne">
                    {/*INSERT TABLE HERE*/}
                    {projects.map((project) => {
                      if (project.expo) {
                        return (
                          <Container fluid>
                            <Row
                              style={{
                                backgroundColor: "white",
                                borderBottom: "1px solid grey",
                                padding: "10px 5px 10px 10px",
                              }}
                            >
                              <Col xs={8}>
                                <h3
                                  class="title"
                                  style={{ color: "grey", fontFamily: "Nunito" }}
                                >
                                  {project.title}
                                </h3>
                                <p style={{ fontFamily: "Nunito" }}>
                                  {project.description}
                                </p>
                              </Col>
                              {/* image goes here */}
                              <Col></Col>
                            </Row>
                          </Container>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/*Dropdown Subheading 2*/}
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionBody"
            >
              <div class="card" id="child1">
                <div class="accordion-sub-item">
                  <h2 class="accordion-header" id="SubHeadingTwo">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSubTwo"
                      aria-expanded="true"
                      aria-controls="collapseSubTwo"
                    >
                      <p class="subtext">Semester 2</p>
                    </button>
                  </h2>
                  {/*Dropdown Subheading 2 Text*/}
                  <div
                    id="collapseSubTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="subtextTwo"
                    data-bs-parent="#collapseSubTwo"
                  >
                  
                       <div class="past-projects-table">
                        <table class=" table table-striped table-hover">
                          <thead class="thead thead-dark">
                            <tr>
                              <th scope="col" style={{ width: "20vh" }}>
                                Project ID
                              </th>
                              <th scope="col" style={{ width: "30vh" }}>
                                Project Name
                              </th>
                              <th scope="col">Brief Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row-table-body">20S2-1</th>
                              <td>
                                Title
                              </td>
                              <td>
                                desc
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            {/*////////////////////////////////////////////*/}

            {/*Dropdown 2*/}
            <div class="accordion-item">
              <h1 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <p class="accordion-title">Projects of 2020</p>
                </button>
              </h1>
              {/*Dropdown Subheading 3*/}
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionBody"
              >
                <div class="card" id="child1">
                  <div class="accordion-sub-item">
                    <h2 class="accordion-header" id="SubHeadingThree">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSubThree"
                        aria-expanded="true"
                        aria-controls="collapseSubThree"
                      >
                        <p class="subtext">Semester 1</p>
                      </button>
                    </h2>
                    {/*Dropdown Subheading 3 Text*/}
                    <div
                      id="collapseSubThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="subtextThree"
                      data-bs-parent="#collapseSubThree"
                    >
                      <p>These are the past projects of Semester 1 2020</p>
                      {/*INSERT TABLE HERE*/}
                    </div>
                  </div>
                </div>
              </div>
              {/*Dropdown Subheading 4*/}
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionBody"
              >
                <div class="card" id="child1">
                  <div class="accordion-sub-item">
                    <h2 class="accordion-header" id="SubHeadingFour">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSubFour"
                        aria-expanded="true"
                        aria-controls="collapseSubFour"
                      >
                        <p class="subtext">Semester 2</p>
                      </button>
                    </h2>
                    {/*Dropdown Subheading 4 Text*/}
                    <div
                      id="collapseSubFour"
                      class="accordion-collapse collapse"
                      aria-labelledby="subtextFour"
                      data-bs-parent="#collapseSubFour"
                    >
                      {/*INSERT TABLE HERE*/}
                      <div class="past-projects-table">
                        <table class=" table table-striped table-hover">
                          <thead class="thead thead-dark">
                            <tr>
                              <th scope="col" style={{ width: "20vh" }}>
                                Project ID
                              </th>
                              <th scope="col" style={{ width: "30vh" }}>
                                Project Name
                              </th>
                              <th scope="col">Brief Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row-table-body">20S2-1</th>
                              <td>
                                Self health check and Treatment suggestion
                              </td>
                              <td>
                                This project offers students the opportunity to
                                be involved in the development ocutting-edge
                                prototype health application. Selected students
                                will work in a teamunder supervision and support
                                to develop one or more features of the prototype
                                As an illustration, a simple use case of the
                                prototype can be as follows: Patient
                                enter/select symptoms in application and as per
                                the symptoms entered applicat will suggest some
                                home care treatment and some laboratory test, If
                                symptoms entered are serious then user will be
                                asked to book appointment with relevant doctor
                                and visit doctor for further consultation.
                              </td>
                            </tr>
                            <tr>
                              <th scope="row-table-body">20S2-2</th>
                              <td>eResearch Hub</td>
                              <td>
                                This project will involve in designing and
                                developing a hub for eResearchinfrastructure and
                                services at UC. This hub will be a platform to
                                integrate andconnect the various eResearch
                                services (on premise or on the cloud) and hence
                                will be a single portal for accessing such
                                services.
                              </td>
                            </tr>
                            <tr>
                              <th scope="row-table-body">20S2-3</th>
                              <td>Digital Lab Notebook</td>
                              <td>
                                This project will involve in designing and
                                developing a digital Lab Notebook. Thnotebook
                                will be used by the researchers to manage notes
                                throughout the lifecyof the data. The main
                                features are to import data (directly from lab
                                devices and users), edit/revise notes,
                                collaborate/share notebooks and publish
                                notebooks. Tcan be a multi-purpose tool to
                                manage a diverse set of notes and data including
                                the non-lab and non-research based data/notes.
                                This tool can be then integratewith the other
                                services in eResearch Hub.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
