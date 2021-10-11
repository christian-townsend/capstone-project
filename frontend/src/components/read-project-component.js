import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ReadProjectComponent(props) {
  console.log("blah");
  const url = "http://localhost:5000/projects";
  const getAllProjects = () => {
    axios
      .get(url)
      .then((response) => {
        const allProjects = response.data.projects.allProjects;
        console.log(allProjects);
      })
      .catch((error) => console.log("blaj"));
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="container dashboard">
      <div class="row mt-5">
        <div class="Project Text col-md-12 mt-5">
          <h1 class="dash-header">Welcome Back, User</h1>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Scope</th>
                <th>Skills</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{useEffect}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
