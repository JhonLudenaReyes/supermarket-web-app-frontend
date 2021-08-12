import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ListDepartments from "../Dashboard/Department/ListDepartments";
import DepartmentRegister from "../Dashboard/Department/DepartmentRegister";

class Landing extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <ListDepartments />
          </Col>
          <Col md="auto">
            <DepartmentRegister />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Landing;
