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
      <div className="container-fluid">
          {/*Banner Logo*/}
          <div class="Banner-Top col-xs col-sm col-md ml-0 mr-0">
                    <div class="row mt-5">
                        <div className="About-Banner col-lg col-md">
                            <h1 id="banner-header">Explore our Past Projects</h1>
                            <p id="banner-text"></p>
                        </div>
                </div>
            </div>
        {/*Body*/}
        <row>
            {projects.map((project) => 
              <div class="card card-register">
                  <div class="card-body">
                      <h1 class="title">{project.title}</h1>
                      <p>{project.description}</p>
                  </div>
              </div>
            )}
        </row>
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
       