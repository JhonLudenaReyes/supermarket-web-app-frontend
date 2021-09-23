import React, { Component } from "react";
import { Navbar, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
//import PropTypes from "prop-types";
import { connect } from "react-redux";

import AuthNavbar from "./AuthNavbar";
//import GuestNavbar from "./GuestNavbar";

import Logo from "../../../static/img/Supermarket.png";

class Navigation extends Component {
  componentDidMount() {}

  render() {
    const authLinks = <AuthNavbar />;
    //const guestLinks = <GuestNavbar/>;

    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Image src={Logo} width="50" height="50" rounded />
              <b>Supermarket</b>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">{authLinks}</Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

Navigation.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Navigation);
