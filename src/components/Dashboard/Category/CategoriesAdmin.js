import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ListCategories from "./ListCategories";
import "./Styles/CategoriesAdmin.scss";

class CategoriesAdmin extends Component {
  render() {
    return (
      <div className="categoryContainer">
        <ListCategories className="listCategories" />
      </div>
    );
  }
}

export default connect()(withRouter(CategoriesAdmin));
