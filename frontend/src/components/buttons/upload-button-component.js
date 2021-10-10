import React, { Component } from "react";

export default class UploadButton extends Component {
  render() {
    return (
      <div className="input-group">
        <div className="custom-file">
          <input
            style={{ marginTop: 10 }}
            type="file"
            className="custom-file-input"
            id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01"
          />
          <label className="custom-file-label" htmlFor="inputGroupFile01">
            Choose file
          </label>
        </div>
      </div>
    );
  }
}
