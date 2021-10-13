import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "../static/navbar-component";
import BasicDateRangePicker from "./basicDateRangePicker";
import axios from "axios";

export default function AddProject(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [scope, setScope] = useState("");
  const [save, setSave] = useState(false);

  const onSubmit = () => {
    //preventDefault();

    setSave(true);
    const project = {
      title: title,
      description: description,
      scope: scope,
    };

    axios
      .post("http://localhost:5000/projects/add", project)
      .then((res) => console.log(res.data));

    window.location = "/project";
  };

  return (
    <div className="addProject-header">
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
          <h1 style={{ marginBottom: 30 }}>Create a new Project</h1>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Title"
            />
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Description"
              rows={4}
            />
            <Form.Label>Scope</Form.Label>
            <Form.Control
              style={{ marginBottom: 15 }}
              as="textarea"
              value={scope}
              onChange={(event) => setScope(event.target.value)}
              placeholder="Scope"
              rows={2}
            />
            <BasicDateRangePicker />
            <DropdownButton
              style={{ marginTop: 15 }}
              id="dropdown-basic-button"
              title="Group Size"
            >
              <Dropdown.Item href="#/action-1">1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">3</Dropdown.Item>
            </DropdownButton>
          </Form.Group>
        </Form>
        <Button
          style={{ marginTop: 10, width: 650 }}
          onClick={(event) => onSubmit()}
          variant="success"
          size="lg"
        >
          {save ? "Creating Project..." : "Create Project"}
        </Button>
      </div>
    </div>
  );
}
