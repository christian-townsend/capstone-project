import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Account extends Component {
    onLogin(e) {
        e.preventDefault();
    
        axios
          .request("http://localhost:5000/users")
          .then((res) => console.log(res.data));
    
        window.location = "http://localhost:5000/users";
      }
    
    render (){
        return (
            <div class="fullpage">
                <row>
                {/* main title card */}
                 <div class="content-area col-xs-12 col-md-12 px-0">
                     <div class="card border-dark card-header">
                            <div class="text-overlay-header col-xs-12 col-md-12">        
                                <h1 class="banner-title">Welcome to the Capstone Project</h1>
                                    <div class="banner-text col-xs-12 col-sm-12 col-md-12">
                                    <p class="card-text">The Technology Capstone Research Project
                                    provides the opportunity for students undertake a technology
                                    focused research project. The project will enable
                                    students to develop their theoretical knowledge further in
                                    an area of interest. Through critical analysis and synthesis
                                    of research findings, the students will be able to apply their
                                    knowledge in a unique research context to understand how research
                                    could improve and advance the body of knowledge related to technology.</p>
                                    <Link to="/about">
                                    <button className="btn btn-info">Find Out More</button>
                                    </Link>
                                        </div>
                            </div>
                        </div>
                    </div>

                    {/*Login/Projects/Register Cards*/}
                    <div class="card card-register">
                        <div class= "card-body">
                            <h1 class="title">Want To Sponsor A Project?</h1>
                            <p>The University of Canberra welcomes ideas from industry for technology projects that could be completed, by our students, as part of the Capstone Project.</p>
                            <Link to="/login">
                                    <button className="btn btn-primary">Submit a Project</button>
                            </Link>
                        </div>
                    </div>
                    <div class="card card-projects bg-light">
                        <div class="card-body">
                            <h1 class="title">Check Out The Past Projects!</h1>
                            <p>to be edited</p>
                            <Link to="/pastprojects">
                                    <button className="btn btn-primary">View Projects</button>
                                </Link>
                        </div>
                    </div>
                    <div class="card card-login">
                        <div class="card-body">
                            <h1 class="title">Login to your Account</h1>
                            <p>to be edited</p>
                                    <button className="btn btn-primary" onClick={(e) => this.onLogin(e)}>Login</button>
                        </div>
                    </div>  
                </row>
            </div>
       
        )
    }
}