import React, { Component } from "react";
import axios from "axios";




const Project = (props) => (
  <tr>
    <td>{props.project.title}</td>
    <td>{props.project.active}</td>
    <td>{props.project.description}</td>
    <td>{props.project.scope}</td>
    <td>{props.project.skills}</td>
    <td>{props.project.size}</td>
    <td>{props.project.duration}</td>
    <td>{props.project.project_sponsors}</td>
  </tr>
);

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.deleteProject = this.deleteProject.bind(this);

    this.state = { projects: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/projects/")
      .then((response) => {
        this.setState({ projects: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteProject(id) {
    axios.delete("http://localhost:5000/projects/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      projects: this.state.projects.filter((el) => el._id !== id),
    });
  }

  projectsList() {
    return this.state.projects.map((currentproject) => {
      return (
        <Project
          projects={currentproject}
          deleteProject={this.deleteProject}
          key={currentproject._id}
        />
      );
    });
  }

  render() {
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
              <tbody>{this.projectsList()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
