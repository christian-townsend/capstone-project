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

                </div>
              </div>
            </div>
          </div>
      
          {/*Banner Logo*/}

        {/*Body*/}
        {projects.map((project) =>
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
          </Container>
          )}
      
      </row>
      </div>
    )}
       