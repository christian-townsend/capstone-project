import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar-component";
import Dashboard from "./components/dashboard-component";
import Landing from "./components/landing-component";
import Project from "./components/add-project-component";
import About from "./components/about-us-component";
import Footer from "./components/footer-component";
import PastProject from "./components/past-projects-component";


import ReadProject from "./components/read-project-component";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/addProject" component={Project} />
          <Route path="/Project" component={ReadProject} />

          <div>
            <Navbar />
              
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/home" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/pastprojects" component={PastProject} />
              
            <Footer />
          </div>
          
        </Switch>
      </Router>
    </div>
  );
}
export default App;