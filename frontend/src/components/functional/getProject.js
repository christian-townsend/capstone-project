import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navbar from "../static/navbar-component";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

export default function GetProject(props) {
  const [projects, setProjects] = useState([]);

  // Retrieve the latest Project data
  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:5000/projects", {
        withCredentials: true,
      });
      setProjects(result.data);
    })();
  }, []);

  // Delete a project
  const deleteProject = (id) => {
    console.log(id);
    axios.delete("http://localhost:5000/projects/" + id).then((response) => {
      console.log(response.data);
    });

    window.location = "/project";
  };

  return (
    <div>
      <Navbar />

      <div
        style={{
          marginLeft: 50,
          marginRight: 50,
          marginTop: 40,
          marginBottom: 200,
          color: "white",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: 30 }}>All Projects</h1>
        <Container>
          <Alert variant="success">
            <Alert.Heading>The Submitted Project List</Alert.Heading>
            <p>
              This is where the platform Administrator can approve or disapprove
              Projects. When a Project is approved, Groups can then express
              interest in that Project.
            </p>
            <hr />
          </Alert>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead
                className="project__header__row"
                style={{ backgroundColor: "white" }}
              >
                <TableRow className="table__row">
                  <TableCell className="table__row">Title</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ backgroundColor: "white" }}>
                {projects.map((project) => (
                  <TableRow>
                    <TableCell>{project.title}</TableCell>
                    <TableCell>{project.description}</TableCell>

                    <TableCell>
                      <Button className="btn" variant="success">
                        Approve
                      </Button>{" "}
                      <Button className="btn" variant="primary">
                        View
                      </Button>{" "}
                      <Button
                        className="btn"
                        variant="danger"
                        onClick={(event) => deleteProject(project._id)}
                      >
                        Disapprove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
      <Table striped bordered hover variant="dark"></Table>
    </div>
  );
}
