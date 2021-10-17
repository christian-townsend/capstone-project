import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import ProjectList from "../functional/getProject"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Dashboard(props) {
  const [user, setUser] = useState("User");

  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:5000/users/getUser", {
        withCredentials: true,
      });
      setUser(result.data);
      console.log(result.data);
    })();
  }, []);

  return (
    <div className="container dashboard">
      <div class="row mt-5">
        <div class="Project Text col-md-12 mt-5">
          <h1 class="dash-header">Welcome Back, User</h1>
        </div>
        <Container>
          <Row>
            <Col xs={8}>
        <ProjectList />
        </Col>
        <Col xs={1} />
        <Col><h1 style={{ marginTop: 50, marginLeft: 10, color: "white" }}>
        Groups
      </h1></Col>
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
