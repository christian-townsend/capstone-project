import React, { Component } from "react";
import { Link } from "react-router-dom";
import Project from "./project-component";
import axios from "axios";


export default class Navbar extends Component {

  onClick(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/")
      .then((res) => console.log(res.data));

    window.location = "http://localhost:5000/users/";
  }
  render() {
    return (
      <div className="container-fluid Navbar">
        <nav className="navbar fixed-top navbar-dark navbar-expand-sm col-sm-12 col-md-12">
            {/*Logo*/}
              <Link to="/home">
                <img className="capstone-logo" src="../capstone-logo.svg" alt="capstone logo"></img>
              </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#collapseNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <div className="nav-header-left col-xs-12 col-md-6">
                    {/*Navbar Menu Left Hand Side*/}
                    <ul class="nav navbar-nav me-auto">
                      <li><a class="nav-link" href="/about">About</a></li><br></br>
                      <li><a class="nav-link" href="/sponsors">Sponsors</a></li>
                      <li><a class="nav-link" href="/pastprojects">Past Projects</a></li>
                    </ul>
                </div>
                <div className="nav-header-right col-xs-12 col-md-6">
                    {/*Navbar Menu Right Hand Side*/}
                    <ul class="nav navbar-nav ms-auto">
                      <li><a class="nav-link" onClick={(e) => this.onClick(e)}>Login</a></li>
                    </ul>
              </div>
            </div>
          </nav>
      </div>
    )
  }
}

















          {/*}
              {/*Logo*
              <div class="row">
                <div className="nav-header-logo col-xs-12 col-md-2">
                    <Link to="/home">
                        <img className="capstone-logo" src="../capstone-logo.svg" alt="capstone logo"></img>
                    </Link>
                </div>
              </div>
              <div className="nav-header-left col-xs-12 col-md-6">
                  {/*Navbar Menu Left Hand Side*
                  <ul class="nav navbar-nav me-auto">
                    <li><a class="nav-link" href="/about">About</a></li><br></br>
                    <li><a class="nav-link" href="/sponsors">Sponsors</a></li>
                    <li><a class="nav-link" href="/pastprojects">Past Projects</a></li>
                  </ul>
              </div>
              <div className="nav-header-right col-xs-12 col-md-6">
                  {/*Navbar Menu Right Hand Side*
                  <ul class="nav navbar-nav ms-auto">
                    <li><a class="nav-link" href="/login">Login</a></li>
                  </ul>
                  </div>*/}