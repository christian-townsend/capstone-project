import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="container footer">
        <div class=" col-xs-12 col-md-3 align-self-center mb-3">
          <img
            className="UC-Img"
            src="../uoc.svg"
            alt="University of Canberra Link"
          ></img>
        </div>
        <row>
          <div className="Footer Text "></div>
          <div class="row mt-4">
            <div class="col-12 align-self-center">
              University of Canberra, ACT 2601 Australia, Switchboard +61 2 6201
              5111, ©2017 University of Canberra.
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-12 align-self-center">
              CRICOS number: University of Canberra / University of Canberra
              College #00212K.
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-12 align-self-center">
              The University of Canberra is located on Ngunnawal Country.
            </div>
          </div>
        </row>
      </div>
    );
  }
}