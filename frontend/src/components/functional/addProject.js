import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "../static/navbar-component";
import BasicDateRangePicker from "./basicDateRangePicker";
import Accordion from "react-bootstrap/Accordion";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import FileUpload from "../buttons/FileUpload";
import Footer from "../static/footer-component";

export default function AddProject(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [scope, setScope] = useState("");
  const [save, setSave] = useState(false);

  const onSubmit = () => {
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
          marginLeft: 50,
          marginRight: 50,
          marginTop: 60,
          marginBottom: 60,
          color: "white",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: 30 }}>
          Create a Project
        </h1>
        <Container>
          <Row>
            <div>
              <Col>
                <Alert variant="success">
                  <Alert.Heading>Submitting a new Project.</Alert.Heading>
                  <p>
                    When submitting a new Project, please complete all forms.
                    Upon submission, your entry will be forwarded to the
                    University of Canberra for further assessment.
                  </p>
                </Alert>

                <Accordion style={{ marginTop: 10 }}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Project Brief</Accordion.Header>
                    <Accordion.Body>
                      <Form.Control
                        style={{ marginBottom: 15 }}
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="Title"
                      />

                      <Form.Control
                        as="textarea"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        placeholder="Description"
                        rows={4}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Relevant Skills</Accordion.Header>
                    <Accordion.Body>
                      <Form.Control
                        style={{ marginBottom: 15 }}
                        as="textarea"
                        value={scope}
                        onChange={(event) => setScope(event.target.value)}
                        placeholder="In Scope"
                        rows={2}
                      />
                      <Form.Control
                        style={{ marginBottom: 15 }}
                        as="textarea"
                        value={scope}
                        onChange={(event) => setScope(event.target.value)}
                        placeholder="Out of Scope"
                        rows={2}
                      />

                      <Form.Select style={{ marginBottom: 15 }}>
                        <option>Default select</option>
                      </Form.Select>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Supporting Documentation
                    </Accordion.Header>
                    <Accordion.Body>
                      <FileUpload />
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Contact Details</Accordion.Header>
                    <Accordion.Body>
                      <Form.Control
                        style={{ marginBottom: 10 }}
                        type="text"
                        placeholder="Title"
                      />
                      <Form.Control
                        style={{ marginBottom: 10 }}
                        type="text"
                        placeholder="First Name"
                      />
                      <Form.Control
                        style={{ marginBottom: 10 }}
                        type="text"
                        placeholder="Surname"
                      />
                      <Form.Control
                        style={{ marginBottom: 10 }}
                        type="email"
                        placeholder="Email"
                      />
                      <Form.Control
                        style={{ marginBottom: 10 }}
                        type="phone"
                        placeholder="Phone"
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Dates</Accordion.Header>
                    <Accordion.Body>
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <BasicDateRangePicker />
                        </Form.Group>
                      </Form>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Button
                  style={{ marginTop: 15, width: 1294 }}
                  onClick={(event) => onSubmit()}
                  variant="success"
                  size="lg"
                >
                  {save ? "Submitting Project..." : "Submit Project"}
                </Button>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
