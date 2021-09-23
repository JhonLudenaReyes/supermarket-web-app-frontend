import React, { Component } from "react";
import { Container, Nav, Form, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
//import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./Styles/AuthNavbar.css";

class AuthNavbar extends Component {
  render() {
    return (
      <Nav className="me-auto">
        <Nav.Link href="#/dashboard/administrator/categories-administration">
          Categoria
        </Nav.Link>
        <Link
          className="Link"
          to="/dashboard/administrator/categories-administration"
        >
          Categoria
        </Link>
      </Nav>
    );
  }
}

AuthNavbar.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(withRouter(AuthNavbar));
