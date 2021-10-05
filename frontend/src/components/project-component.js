import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default class Project extends Component {
  render() {
    return (
      <div
        style={{ width: 650, marginLeft: 100, marginTop: 30, color: "white" }}
      >
        <div>
          <h1>
            <Badge bg="secondary">Create a new Project</Badge>
          </h1>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="email" placeholder="Title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" placeholder="Description" rows={4} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Scope</Form.Label>
            <Form.Control as="textarea" placeholder="Scope" rows={2} />
          </Form.Group>
          <Form.Group>
            <Form.Label>From Date</Form.Label>
            <Form.Control type="date" name="fromDate" placeholder="From Date" />
          </Form.Group>
          <Form.Group>
            <Form.Label>To Date</Form.Label>
            <Form.Control type="date" name="fromDate" placeholder="From Date" />
          </Form.Group>
          <DropdownButton
            style={{ marginTop: 10 }}
            id="dropdown-basic-button"
            title="Size"
          >
            <Dropdown.Item href="#/action-1">1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">3</Dropdown.Item>
          </DropdownButton>
        </Form>
        <Button style={{ marginTop: 10 }} variant="success">
          Create
        </Button>{" "}
      </div>
    );
  }
}
