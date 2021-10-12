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

export default function PastProjectsFunction(props) {
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
          {projects.map((project) => 
            <div class="card card-register">
                        <div class= "card-body">
                            <h1 class="title">{project.title}</h1>
                            <p>{project.description}</p>
                            
                        </div>
                    </div>
        )}
        </div>
    )}

         {/*  <div class="row">
            {projects.map((project) => (
            <div class="card card-register">
                        <div class= "card-body">
                            <h1 class="title">{project.title}</h1>
                            <p>{project.description}

                          </p>
                        </div>
                    </div>
                    
            ))}
            </div>
 */}
       