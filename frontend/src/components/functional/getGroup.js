import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function AddGroup(props) {
  const [save, setSave] = useState(false);
  const [groups, setGroup] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:5000/groups", {
        withCredentials: true,
      });
      console.log(result.data);
      setGroup(result.data);
    })();
  }, []);

  const onSubmit = () => {
    setSave(true);

    axios
      .get("http://localhost:5000/groups/add")
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
          color: "white",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: 30 }}>Join a Group</h1>
        <Container>
          <div>
            <Alert variant="success">
              <Alert.Heading>Joining a Group.</Alert.Heading>
              <p>
                In order to submit preferences for Projects, you need to be in a
                Group. Listed below are Groups created by fellow students. Take
                a look at their strengths, things they would like to improve on,
                and make a request to join accordingly.
              </p>
            </Alert>
          </div>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead
                className="project__header__row"
                style={{ backgroundColor: "white" }}
              >
                <TableRow className="table__row">
                  <TableCell className="table__row">Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ backgroundColor: "white" }}>
                {groups.map((group) => (
                  <TableRow>
                    <TableCell>{group.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            style={{ marginTop: 15, width: 1294 }}
            onClick={(event) => onSubmit()}
            variant="success"
            size="lg"
          >
            {save ? "Requesting..." : "Request to join"}
          </Button>
        </Container>
      </div>
    </div>
  );
}
