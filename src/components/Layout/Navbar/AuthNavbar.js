import React, { Component } from "react";
import { Container, Nav, Form, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
//import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./Styles/AuthNavbar.css";

class AuthNavbar extends Component {
  render() {
    return (
      <Container>
        <Nav className="mr-auto">
          <Link
            className="Link"
            to="/dashboard/administrator/categories-administration"
            style={{ color: "gray", textDecoration: "inherit" }}
          >
            <b>Categoria</b>
          </Link>
        </Nav>
      </Container>
    );
  }
}

AuthNavbar.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(withRouter(AuthNavbar));
