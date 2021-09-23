import React, { Component } from "react";
//import { Container, Row, Col } from "react-bootstrap";
import ListDepartments from "./ListDepartments";
import DepartmentRegister from "./DepartmentRegister";
import "./Styles/DepartmentsAdmin.scss";

class DepartmentsAdmin extends Component {
  render() {
    return (
      <div className="departmentContainer">
        <ListDepartments className="listDepartments"/>
        <DepartmentRegister className="departmentRegister"/>
      </div>
    );
  }
}

export default DepartmentsAdmin;
