import React, { Component } from "react";
import { Link } from "react-router-dom";
import Project from "./project-component";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg col-lg-12">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
        <div className="container">
        
          <ul className="navbar-nav me-auto">
            <li class="nav-item nav-Logo">
              
                <Link to="/landing">
                 <img
                   className="capstone-logo"
                   src="../capstone-logo.svg"
                alt="capstone logo"
              ></img>
            </Link>
       
            </li>
            <li class="nav-item">
<<<<<<< HEAD
              
              <a class="nav-link" href="/about">
                About
              </a>
             
            </li>
            <li class="nav-item">
              
              <a class="nav-link" href="/sponsors">
                Current Sponsors
              </a>
              
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pastprojects">
                Past Projects
              </a>
=======
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
>>>>>>> 007f9c22f61ebd89cd29ab9965bc946741c6f702
            </li>
          </ul>
          <ul className="navbar-nav me-auto">
            <li class="nav item">
<<<<<<< HEAD
              <a class="nav-link" href="/login">
                Login
              </a>
=======
              <Link to="/login">
                <a class="nav-link" href="/#">
                  Login
                </a>
              </Link>
>>>>>>> 007f9c22f61ebd89cd29ab9965bc946741c6f702
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
