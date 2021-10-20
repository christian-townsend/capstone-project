import React, { Component } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    };
  }

  onLogin(e) {
    e.preventDefault();

    axios
      .request("http://localhost:5000/users")
      .then((res) => console.log(res.data));

    window.location = "http://localhost:5000/users";
  }

  /* checkLogin {
    if (res.cookie.jwt != NULL) {
      this.state.loggedIn: true
    }
  } */

  render() {
    return (
      <div className="container-fluid Navbar">
        <nav className="navbar fixed-top navbar-dark navbar-expand-sm col-sm-12 col-md-12">
          {/*Logo*/}
          <Link to="/home">
            <img
              style={{ marginLeft: -70, marginRight: 60 }}
              className="capstone-logo"
              src="../capstone_logo.png"
              alt="capstone logo"
            ></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-target="#collapseNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <div className="nav-header-left col-xs-12 col-md-6">
              {/*Navbar Menu Left Hand Side*/}
              <ul class="nav navbar-nav me-auto">
                <li>
                  <a class="nav-link" href="/about">
                    About
                  </a>
                </li>
                <br></br>
                <li>
                  <a class="nav-link" href="/sponsor">
                    Sponsors
                  </a>
                </li>

                <li>
                  <a>
                    <NavDropdown title="Groups" id="nav-dropdown">
                      <NavDropdown.Item eventKey="4.1" href="/project">
                        Join Group
                      </NavDropdown.Item>
                      <NavDropdown.Item eventKey="4.2" href="/addGroup">
                        Create Group
                      </NavDropdown.Item>
                    </NavDropdown>
                  </a>
                </li>
                <li>
                  <a>
                    <NavDropdown title="Projects" id="nav-dropdown">
                      <NavDropdown.Item eventKey="4.1" href="/project">
                        Submitted Projects
                      </NavDropdown.Item>
                      <NavDropdown.Item eventKey="4.2" href="/pastprojects">
                        Past Projects
                      </NavDropdown.Item>
                      <NavDropdown.Item eventKey="4.2" href="/addProject">
                        New Project
                      </NavDropdown.Item>
                    </NavDropdown>
                  </a>
                </li>
              </ul>
            </div>
            <div
              style={{ marginRight: -300 }}
              className="nav-header-right col-xs-12 col-md-6"
            >
              {/*Navbar Menu Right Hand Side*/}
              <ul class="nav navbar-nav ms-auto">
                <li>
                  <a class="nav-link" onClick={(e) => this.onLogin(e)}>
                    Login
                  </a>
                </li>
                <li>
                  <a class="nav-link">/</a>
                </li>

                <li>
                  <a class="nav-link" onClick={(e) => this.onLogin(e)}>
                    Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
