import React, { Component } from 'react';

export default class Account extends Component {
    render (){
        return (

            <div class="row">
            <div class="col-sm-8">
              <div class="card card-project">
                <div class="card-body">
                  <h3 class="card-title">Project Title</h3>
                  <p class="card-text">What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                        not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..</p>

                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card card-team">
                <div class="card-body">
                  <h3 class="card-title">Group Number</h3>
                  <p class="card-text">What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                        not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..</p>
                </div>
              </div>
            </div>
          </div>

        )
    }
}