import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Account extends Component {
    render (){
        return (
            <div class="row">
                 <div class="col-lg-12">
                     <div class="card card-main">
                        <img class="card-img-top" src="/images/uccampus.jpg" alt="UC Campus"></img>
                        <div class="card-body" >
                        <h1 className="landing-title" >Welcome to the Capstone Project</h1>  
                        <p> What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                        not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                     <div class="col-lg-12 divider-section">
                        <hr class="divider-blue"></hr>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-6">
                        <div class="card card-portal-1">
                        <img class="card-img-top" src="/images/student-portal.jpeg" alt="Student Portal"></img>
                        <div class="card-body text-center">
                            <h3 class="portal-title">Student Portal</h3>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <Link to="/login">
                                    <button className="btn btn-primary">Login</button>
                                </Link>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card card-portal-2">
                        <img class="card-img-top" src="/images/sponsor-portal.jpeg" alt="Sponsor Portal"></img>
                        <div class="card-body text-center">
                            <h3 class="portal-title">Sponsor Portal</h3>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <Link to="/login">
                                    <button className="btn btn-primary">Login</button>
                                </Link>
                        </div>
                        </div>
                    </div>
                                    
                <div class="row">
                     <div class="col-lg-12 divider-section"></div>
                </div>       
                </div>


            <div class="row">
                    <div class="col-sm-6">
                        <div class="card card-portal-1">
                        <img class="card-img-top" src="/images/staff-portal.jpeg" alt="Staff Portal"></img>
                        <div class="card-body text-center">
                            <h3 class="portal-title">Staff Portal</h3>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <Link to="/login">
                                    <button className="btn btn-primary">Login</button>
                                </Link>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card card-portal-2">
                        <img class="card-img-top" src="/images/previous-projects-portal.jpeg" alt="Previous Projects"></img>
                        <div class="card-body text-center">
                            <h3 class="portal-title">Previous Projects</h3>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <Link to="/projects">
                                    <button className="btn btn-primary">View Projects</button>
                                </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}