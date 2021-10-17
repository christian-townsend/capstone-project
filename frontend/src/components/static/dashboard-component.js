import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import ProjectList from "../functional/getProject";
import axios from "axios";
import Navbar from "../static/navbar-component";

export default function Dashboard() {
  const [username, setUser] = useState("User");
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
      setLastName(response.data.last_name);

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
    <div className="container dashboard" style={{ marginLeft: 50, width: 900 }}>
      <Navbar />
      <div class="row mt-5">
        <div class="Project Text col-md-12 mt-5">
          <h1 style={{ marginBottom: 20 }} class="dash-header">
            Welcome Back, {firstName}.
          </h1>
          <Alert variant="success">
            <Alert.Heading>The Capstone Project Dashboard.</Alert.Heading>
            <p>
              Welcome to the dashboard. Using the accordions below, you can view
              your contact information, projects you have submitted, projects
              you are sponsoring, and group details.
            </p>
          </Alert>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>User Details</Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput">
                    ID: {username}
                  </Form.Label>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput">
                    Name: {firstName} {lastName}
                  </Form.Label>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput">
                    Email: {email}
                  </Form.Label>
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Project Details</Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput">
                    Assigned Project: {projectTitle}
                  </Form.Label>
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Group Details</Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput">
                    Group Members:
                  </Form.Label>
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <Container>
          <Row>
            <Col xs={8}></Col>
            <Col xs={1} />
            <Col></Col>
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
