import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ProjectList from "../functional/getProject";
import axios from "axios";

export default function Dashboard() {
  const [user, setUser] = useState("User");
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [skills, setSkills] = useState();

  const [projectTitle, setProjectTitle] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users/getUser").then((response) => {
      setUser(response.data.username);
      setEmail(response.data.email);
      setFirstName(response.data.first_name);

      getUniqueProjects(response.data.sponsored_projects);
    });
  }, []);

  const getUniqueProjects = (id) => {
    console.log("Entered Request");
    axios.get("http://localhost:5000/projects/" + id).then((response) => {
      setProjectTitle(response.data.title);

      console.log(response.data);
    });
  };

  return (
    <div className="container dashboard">
      <div class="row mt-5">
        <div class="Project Text col-md-12 mt-5">
          <h1 class="dash-header">Welcome Back, {firstName}</h1>
          <h3 class="dash-header">Profile</h3>
          <h1 class="dash-header">{projectTitle}</h1>
        </div>
        <Container>
          <Row>
            <Col xs={8}></Col>
            <Col xs={1} />
            <Col>
              <h1 style={{ marginTop: 50, marginLeft: 10, color: "white" }}>
                Groups
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
