import React, { Component } from "react";
import { Link } from "react-router-dom";
import Project from "./project-component";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="container-fluid">
          <a href="/#">
            <Link to="/landing">
              <img
                className="capstone-logo"
                src="../capstone-logo.svg"
                alt="capstone logo"
              ></img>
            </Link>
          </a>
          <ul className="navbar-nav me-auto">
            <li class="nav-item">
              <Link to="/about">
              <a class="nav-link" href="/#">
                About
              </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/sponsors">
              <a class="nav-link" href="/#">
                Current Sponsors
              </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/pastprojects">
              <a class="nav-link" href="/#">
                Past Projects
              </a>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li class="nav item">
              <Link to="/login">
              <a class="nav-link" href="/#">
                Login
              </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
