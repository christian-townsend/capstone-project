import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "../static/navbar-component";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Alert from "react-bootstrap/Alert";
import Footer from "../static/footer-component";

export default function AddGroup(props) {
  const [name, setName] = useState("");
  const [save, setSave] = useState(false);

  const onSubmit = () => {
    setSave(true);
    const group = {
      name: name,
    };

    axios
      .post("http://localhost:5000/groups/add", group)
      .then((res) => console.log(res.data));

    window.location = "/addGroup";
  };

  return (
    <div>
      <div
        style={{
          marginLeft: 50,
          marginRight: 50,
          marginTop: 40,
          marginBottom: 100,
          color: "white",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: 30 }}>
          Create a Group
        </h1>
        <Container>
          <div>
            <Alert variant="success">
              <Alert.Heading>Creating a new Group.</Alert.Heading>
              <p>
                Before you can express interest in a Project, you must form a
                group. One member from each group should perform this process,
                enabling their group members to join. After a Group has been
                created, the creator will automatically be assigned to that
                group. They can then forward on the invite to the remaining
                group members.
              </p>
              <hr />
              If you haven't already formed a group, we recommend creating one
              here. You can detail the technologies you're interested in using,
              or would like to use more of. This will allow others with similar
              interests to easily gauge what Project you might pursue.
            </Alert>
          </div>
          <Accordion style={{ marginTop: 10 }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Project Brief</Accordion.Header>
              <Accordion.Body>
                <Form.Control
                  style={{ marginBottom: 15 }}
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Title"
                />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Contact Details</Accordion.Header>
              <Accordion.Body>
                <Form.Control
                  style={{ marginBottom: 10 }}
                  type="text"
                  placeholder="Mobile"
                />
                <Form.Control
                  style={{ marginBottom: 10 }}
                  type="text"
                  placeholder="Discord Server"
                />
                <Form.Control
                  style={{ marginBottom: 10 }}
                  type="text"
                  placeholder="Facebook"
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Button
            style={{ marginTop: 15, width: 1294 }}
            onClick={(event) => onSubmit()}
            variant="success"
            size="lg"
          >
            {save ? "Creating Group..." : "Create Group"}
          </Button>
        </Container>
      </div>
    </div>
  );
}
