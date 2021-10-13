import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import ProgressBar from "react-bootstrap/ProgressBar";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "../static/navbar-component";
import axios from "axios";

export default function AddGroup(props) {
  const [value, setValue] = useState("");
  const [percent, setPercent] = useState(0);
  const [save, setSave] = useState(false);

  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };

  const onSubmit = () => {
    setSave(true);
    setPercent(100);
    window.location = "/addGroup";
  };

  return (
    <div className="addGroup-header">
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
          <h1 style={{ marginBottom: 30 }}>Create Project Groups</h1>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <h5>How many groups would you like to create?</h5>
            <Form.Control
              type="number"
              onChange={(event) => setPercent(33)}
              placeholder="Enter Number of Groups"
            />
            <h5 style={{ marginTop: 15 }}>
              Select the amount of slots per Group.
            </h5>

            <DropdownButton
              alignRight
              title="Slots"
              id="dropdown-menu-align-right"
              onSelect={handleSelect}
              onChange={(event) => setPercent(66)}
            >
              <Dropdown.Item eventKey="1 slot will be created for the Group.">
                1
              </Dropdown.Item>
              <Dropdown.Item eventKey="2 slots will be created per Group.">
                2
              </Dropdown.Item>
              <Dropdown.Item eventKey="3 slots will be created per Group.">
                3
              </Dropdown.Item>
              <Dropdown.Item eventKey="5 slots will be created per Group.">
                4
              </Dropdown.Item>
              <Dropdown.Item eventKey="5 slots will be created per Group.">
                5
              </Dropdown.Item>
            </DropdownButton>
            <h4 style={{ marginTop: 15, alignRight: true }}>{value}</h4>
          </Form.Group>
        </Form>
        <Button
          style={{ marginTop: 10, width: 650 }}
          onClick={(event) => onSubmit()}
          variant="success"
          size="lg"
        >
          {save ? "Creating Groups…" : "Create Groups"}
        </Button>
        <div>
          <ProgressBar
            striped
            variant="success"
            style={{ marginTop: 20 }}
            now={percent}
          />
        </div>
      </div>
    </div>
  );
}
