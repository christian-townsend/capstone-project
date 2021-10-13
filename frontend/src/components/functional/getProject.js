import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navbar from "../static/navbar-component";
import Badge from "react-bootstrap/Badge";

export default function GetProject(props) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:5000/projects", {
        withCredentials: true,
      });
      setProjects(result.data);
    })();
  }, []);

  return (
    <div>
      <Navbar />

      <h1 style={{ marginTop: 150, marginLeft: 100, color: "white" }}>
        All Projects
      </h1>

      <TableContainer
        component={Paper}
        style={{
          marginTop: 50,
          marginLeft: 100,
          maxWidth: 1600,
          backgroundColor: "#00809f",
        }}
      >
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: "white" }}>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Scope</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow>
                <TableCell>{project.title}</TableCell>
                <TableCell>{project.description}</TableCell>
                <TableCell>{project.scope}</TableCell>
                <TableCell>
                  <Badge bg="success">Activate</Badge>{" "}
                  <Badge bg="primary">Update</Badge>{" "}
                  <Badge bg="danger">Delete</Badge>{" "}
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
