import React, { Component } from 'react';

export default class About extends Component {
    render (){
        return (
            <div className="container-fluid">
                <div class="Banner-Top col-xs col-sm col-md ml-0 mr-0">
                    <div class="row mt-5">
                        <div className="About-Banner col-lg col-md">
                            <h1 id="banner-header">About the Capstone Project</h1>
                            <p id="banner-text">The Technology Capstone Research Project
                                    provides the opportunity for students undertake a technology
                                    focused research project. The project will enable
                                    students to develop their theoretical knowledge further in
                                    an area of interest. Through critical analysis and synthesis
                                    of research findings, the students will be able to apply their
                                    knowledge in a unique research context to understand how research
                                    could improve and advance the body of knowledge related to technology.</p>
                        </div>
                </div>
            </div>
            <div className="info-text">
                <div class="card card-about col-xs-12 col-lg-12">

                </div>
            </div>
        </div>
        )
    }
}