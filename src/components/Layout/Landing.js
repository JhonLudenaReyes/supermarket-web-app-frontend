import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ListDepartments from "../Dashboard/Department/ListDepartments";

class Landing extends Component {
  render() {
    return (
      <Container>
        <ListDepartments />
      </Container>
    );
  }
}

export default Landing;
