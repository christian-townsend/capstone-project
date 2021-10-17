import React, { useState, useEffect, useMemo } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
const store = require("store");

export default function Dashboard(props) {
  const [user, setUser] = useState("User");

  useEffect(() => {
    (async () => {
      setUser(store.get("user"));
      console.log(user);
    })();
  }, []);

  return (
    <div className="container dashboard">
      <div class="row mt-5">
        <div class="Project Text col-md-12 mt-5">
          <h1 class="dash-header">Welcome Back, {user}</h1>
        </div>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Projects</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first"></Tab.Pane>
                <Tab.Pane eventKey="second"></Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
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
