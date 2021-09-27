import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg">
          <div className="container-fluid">
                <ul className="navbar-nav">  
                    <li>
                      <Link to='/landing'><img className="capstone-logo" src="/images/capstone-logo.svg" alt="capstone logo"></img></Link>
                    </li>
                    <li>
                    <a href="https://www.canberra.edu.au/content/myuc/home.html/">
                      <img className="myUC-logo" width="129.6" height="47.2" src="/images/myUC.svg" alt="myUC logo"></img></a>
                    </li>
                    <li>
                      <Link to='/dashboard/'> <img className="canvas" width="52" height="52" src="/images/canvas.svg" alt="canvas logo"></img></Link>
                    </li>
                    <li>
                      <i className="fas fa-user-circle fa-2x"></i>
                    </li>
                </ul>
            </div>
      </nav>
    );
  }
}