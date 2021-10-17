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

export default function GetProject(props) {
  const [projects, setProjects] = useState([]);

  // Retrieve the latest Project data
  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:5000/projects", {
        withCredentials: true,
      });
      setProjects(result.data);
      console.log(result.data);
    })();
  }, []);

  // Delete a project
  const deleteProject = (id) => {
    axios.delete("http://localhost:5000/projects/" + id).then((response) => {
      console.log(response.data);
    });

    window.location = "/project";
  };

  return (
    <div>
      <Navbar />

      <h1 style={{ marginTop: 50, marginLeft: 10, color: "white" }}>
        All Projects
      </h1>

      <TableContainer
        component={Paper}
        style={{
          marginTop: 50,
          marginLeft: 10,
          maxWidth: 1600,
          backgroundColor: "#00809f",
        }}
      >
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead
            className="project__header__row"
            style={{ backgroundColor: "white" }}
          >
            <TableRow className="table__row">
              <TableCell className="table__row">Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Scope</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{backgroundColor:"white"}}>
            {projects.map((project) => (
              <TableRow>
                <TableCell>{project.title}</TableCell>
                <TableCell>{project.description}</TableCell>
                <TableCell>{project.scope}</TableCell>
                <TableCell>
                  <Button className="btn" variant="success">
                    Approve
                  </Button>{" "}
                  <Button className="btn" variant="primary">
                    Update
                  </Button>{" "}
                  <Button
                    className="btn"
                    variant="danger"
                    onClick={(event) => deleteProject(project._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Table striped bordered hover variant="dark"></Table>
    </div>
  );
}