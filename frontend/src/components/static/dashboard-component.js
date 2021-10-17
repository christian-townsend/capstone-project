import React, { useState, useEffect, useMemo } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import ProjectList from "../functional/getProject";
import axios from "axios";

export default function Dashboard(props) {
  const [user, setUser] = useState("User");
  const [userEmail, setUserEmail] = useState();
  const [userFirstName, setUserFirstName] = useState();
  const [userLastName, setUserLastName] = useState();
  const [skills, setSkills] = useState();

  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:5000/users/getUser");

      setUser(result.data.username);
      setSkills(result.data.assigned_skills);
      setUserFirstName(result.data.first_name);
      setUserLastName(result.data.last_name);
      setUserEmail(result.data.email);
      console.log(result.data);
    })();
  }, []);

  return (
    <div className="container dashboard">
      <div class="row mt-5">
        <div class="Project Text col-md-12 mt-5">
          <h1 class="dash-header">Welcome Back, {user}</h1>
          <h1 class="dash-header">Welcome Back, {userEmail}</h1>
          <h1 class="dash-header">Welcome Back, {userFirstName}</h1>
          <h1 class="dash-header">Welcome Back, {userLastName}</h1>
          <h1 class="dash-header">Welcome Back, {skills}</h1>
        </div>
        <Container>
          <Row>
            <Col xs={8}>
              <ProjectList />
            </Col>
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

/*
<div class="Project Text col-md-12 mt-5">
          {project.map((projects) => (
            <h1 class="dash-header">Welcome Back, Christian</h1>
          ))}
        </div>

*/
