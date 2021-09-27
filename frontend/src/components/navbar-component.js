import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg">
          <div className="container-fluid">

                 

                 
                 <a> <Link to='/landing'><img className="capstone-logo" src="/images/capstone-logo.svg" alt="capstone logo"></img>
                 </Link></a>

                <ul className="navbar-nav">  
                    <li>
                    <a href="https://www.canberra.edu.au/content/myuc/home.html/">
                    <img className="myUC-logo" width="129.6" height="47.2" src="/images/myUC.svg" alt="myUC logo"></img>
                    </a>
                    </li>

                    <li>
                    <a href="https://uclearn.canberra.edu.au//">
                    <img className="canvas" width="52" height="52" src="/images/canvas.svg" alt="canvas logo"></img>
                    </a>
                    </li>
                    
                    <li>
                    <Link to="/account" className="fas fa-user-circle fa-2x"></Link>
                    </li>
                </ul>
                </div>
            </nav>
    );
  }
}