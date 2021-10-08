import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Account extends Component {
    render (){
        return (
            <div class="fullpage">
                <row>
                {/* main title card */}
                 <div class="content-area col-lg-12 px-0">
                     <div class="card border-dark card-header">
                            <div class=" container text-overlay-header">
                                    <h1 class="title-logo">Welcome to the Capstone Project</h1>
                                    <p class="card-text">The Technology Capstone Research Project
                                    provides the opportunity for students undertake a technology
                                    focused research project. The project will enable
                                    students to develop their theoretical knowledge further in
                                    an area of interest. Through critical analysis and synthesis
                                    of research findings, the students will be able to apply their
                                    knowledge in a unique research context to understand how research
                                    could improve and advance the body of knowledge related to technology. </p>
                                    <Link to="/about">
                                    <button className="btn btn-info">Find Out More</button>
                                    </Link>
                            </div>
                        </div>
                    </div>
                    {/*Login/Projects/Register Cards*/}
                    <div class="card card-register">
                        <div class="card-body">
                            <h1 class="title">Want To Sponsor A Project?</h1>
                            <p>to be edited</p>
                            <Link to="/login">
                                    <button className="btn btn-primary">Register</button>
                                </Link>
                        </div>
                    </div>
                    <div class="card card-projects bg-light">
                        <div class="card-body">
                            <h1 class="title">Check Out The Past Projects!</h1>
                            <p>to be edited</p>
                            <Link to="/login">
                                    <button className="btn btn-primary">View Projects</button>
                                </Link>
                        </div>
                    </div>
                    <div class="card card-login">
                        <div class="card-body">
                            <h1 class="title">Login to your Account</h1>
                            <p>to be edited</p>
                                <Link to="/login">
                                    <button className="btn btn-primary">Login</button>
                                </Link>
                        </div>
                    </div>  
                </row>
            </div>
       
        )
    }
}