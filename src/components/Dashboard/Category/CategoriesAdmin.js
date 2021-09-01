import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import ListCategories from "./ListCategories";

class CategoriesAdmin extends Component {
  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <ListCategories />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default connect()(withRouter(CategoriesAdmin));
