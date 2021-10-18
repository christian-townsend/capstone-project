import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/static/navbar-component";
import Dashboard from "./components/static/dashboard-component";
import Landing from "./components/static/landing-component";
import addProject from "./components/functional/addProject";
import About from "./components/static/about-us-component";
import Footer from "./components/static/footer-component";
import PastProject from "./components/static/past-projects-component";
import UploadFile from "./components/buttons/FileUpload";
import Sponsor from "./components/static/sponsor-component";
import addGroup from "./components/functional/addGroup";
import ReadProject from "./components/functional/getProject";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/addProject" component={addProject} />
          <Route path="/addGroup" component={addGroup} />
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/home" />;
            }}
          />
          <Route path="/addProject" component={addProject} />
          <Route path="/Project" component={ReadProject} />

          <div>
            <Navbar />

            <Route path="/dashboard" component={Dashboard} />
            <Route path="/home" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/sponsor" component={Sponsor} />
            <Route path="/pastprojects" component={PastProject} />
            <Route path="/UploadFile" component={UploadFile} />
            
            <Footer />
          </div>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
