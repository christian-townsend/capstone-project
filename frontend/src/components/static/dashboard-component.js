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
  const [groups, setGroups] = useState([]);
  const [groupMembers, setGroupMembers] = useState([]);

  // Get unique user information to display on dashboard
  useEffect(() => {
    console.log(groupMembers);
    axios.get("http://localhost:5000/users/getUser").then((response) => {
      setUser(response.data.username);
      setEmail(response.data.email);
      setFirstName(response.data.first_name);
      setLastName(response.data.last_name);
      getUniqueProjects(response.data.sponsored_projects);
      getGroupMembers(response.data.group);
    });
  }, []);

  // Get project information for unique user
  const getUniqueProjects = (id) => {
    axios.get("http://localhost:5000/projects/" + id).then((response) => {
      setProjectTitle(response.data.title);
    });
  };

  // Display group members for unique user
  const getGroupMembers = (id) => {
    axios.get("http://localhost:5000/groups/" + id).then((response) => {
      console.log(response);
      setGroups(response.data.students);
      console.log("hello # 1");
    });
    console.log(groups);
    setGroupMembersList();
  };

  const setGroupMembersList = () => {
    setGroupMembers([]);
    groups.map((group) =>
      axios.get("http://localhost:5000/users/" + group).then((response) => {
        setGroupMembers((groupMembers) => [...groupMembers, response.data]);
        console.log(response.data.username);
        console.log(groupMembers);
        console.log("hello # 2");
      })
    );
  };

  return (
    <div className="container dashboard" style={{ width: 1200 }}>
      <div>
        <Alert style={{ marginTop: 40 }} variant="success">
          <Alert.Heading>Welcome back, {firstName}</Alert.Heading>
          <p>
            Welcome to the dashboard. Using the accordions below, you can view
            your contact information, projects you have submitted, projects you
            are sponsoring, and group details.
          </p>
        </Alert>

        <Container style={{ marginTop: 50, marginBottom: 200 }}>
          <Row>
            <Col>
              <h3 style={{ color: "white" }}>Student</h3>
              <Form.Group style={{ color: "white" }} className="mb-3">
                <Form.Label htmlFor="disabledTextInput">
                  ID: {username}
                </Form.Label>
              </Form.Group>
              <Form.Group style={{ color: "white" }} className="mb-3">
                <Form.Label htmlFor="disabledTextInput">
                  Name: {firstName} {lastName}
                </Form.Label>
              </Form.Group>
              <Form.Group style={{ color: "white" }} className="mb-3">
                <Form.Label htmlFor="disabledTextInput">
                  Email: {email}
                </Form.Label>
              </Form.Group>
            </Col>
            <Col>
              <h3 style={{ color: "white" }}>Group Members</h3>
              {groupMembers.map((members) => (
                <Form.Group style={{ color: "white" }} className="mb-3">
                  <Form.Label htmlFor="disabledTextInput">
                    {members.first_name} {members.last_name}
                  </Form.Label>
                  <Form.Label htmlFor="disabledTextInput">
                    , {members.username}
                  </Form.Label>
                </Form.Group>
              ))}
            </Col>
            <Col>
              <h3 style={{ color: "white" }}>Assigned Project</h3>
              <Form.Group style={{ color: "white" }} className="mb-3">
                <Form.Label htmlFor="disabledTextInput">
                  {projectTitle}
                </Form.Label>
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
