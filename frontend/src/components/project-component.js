import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "./navbar-component";
import UploadButton from "./buttons/upload-button-component";
import axios from "axios";

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeScope = this.onChangeScope.bind(this);

    this.state = {
      title: "",
      description: "",
      scope: "",
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeScope(e) {
    this.setState({
      scope: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const project = {
      title: this.state.title,
      description: this.state.description,
      scope: this.state.description,
    };

    console.log(project);

    axios
      .post("http://localhost:5000/projects/add", project)
      .then((res) => res.redirect("http://localhost:3000/projects"));

    window.location = "/projects";
  }

  render() {
    return (
      <div>
        <Navbar />

        <div
          style={{
            width: 650,
            marginLeft: 100,
            marginTop: 150,
            color: "white",
          }}
        >
          <div>
            <h1 style={{ marginBottom: 30 }}>
              <Badge bg="secondary">Create a new Project</Badge>
            </h1>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={this.state.title}
                onChange={this.onChangeTitle}
                placeholder="Title"
              />
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={this.state.description}
                onChange={this.onChangeDescription}
                placeholder="Description"
                rows={4}
              />
              <Form.Label>Scope</Form.Label>
              <Form.Control
                as="textarea"
                value={this.state.scope}
                onChange={this.onChangeScope}
                placeholder="Scope"
                rows={2}
              />
              <Form.Label>From Date</Form.Label>
              <Form.Control
                type="date"
                name="fromDate"
                placeholder="From Date"
              />
              <Form.Label>To Date</Form.Label>
              <Form.Control
                type="date"
                name="fromDate"
                placeholder="From Date"
              />
              <DropdownButton
                style={{ marginTop: 10 }}
                id="dropdown-basic-button"
                title="Size"
              >
                <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">3</Dropdown.Item>
              </DropdownButton>
              <UploadButton />
            </Form.Group>
          </Form>
          <Button
            style={{ marginTop: 10 }}
            onClick={(e) => this.onSubmit(e)}
            variant="success"
            size="lg"
          >
            Create
          </Button>{" "}
        </div>
      </div>
    );
  }
}
