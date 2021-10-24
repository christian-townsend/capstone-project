import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import axios from "axios";

export default function NavbarComponent() {
  const onLogin = () => {
    axios
      .request("http://localhost:5000/users")
      .then((res) => console.log(res.data));

    window.location = "http://localhost:5000/users";
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">
          <img className="capstone-logo" src="../capstone_logo.png"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/sponsor">Sponsors</Nav.Link>
            <NavDropdown title="Groups" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/getGroup">Join Group</NavDropdown.Item>
              <NavDropdown.Item href="/addGroup">Create Group</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Project">
                Submitted Projects
              </NavDropdown.Item>
              <NavDropdown.Item href="/addProject">
                New Project
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/pastProjects">
                Past Projects
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={(event) => onLogin()}>Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
