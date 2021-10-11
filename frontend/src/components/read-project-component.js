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

export default function ReadProjectComponent(props) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:5000/projects");
      setProjects(result.data);
      console.log(result.data);
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
        style={{ marginTop: 50, marginLeft: 50, paddingRight: -50 }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 100 }}>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Scope</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow>
                <TableCell>{project.title}</TableCell>
                <TableCell>{project.description}</TableCell>
                <TableCell>{project.scope}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
