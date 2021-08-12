import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { saveDepartment } from "../../../actions/departmentActions";
import { editDepartment } from "../../../actions/departmentActions";

class DepartmentRegister extends Component {
  state = {
    formState: "Registrar",
    departmentId: "",
    department: "",
  };

  componentDidUpdate(prevProps) {
    const { department } = this.props.department;
    if (department !== prevProps.department.department) {
      this.updateState(department);
      this.changeForm();
    }
  }

  updateState = (department) => {
    this.setState({
      departmentId: department.departmentId,
      department: department.department,
    });
  };

  changeForm = () => {
    this.setState({
      formState: "Modificar",
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const dataSave = {
      department: this.state.department,
    };

    const dataEdit = {
      departmentId: this.state.departmentId,
      department: this.state.department,
    };

    if (this.state.departmentId === "") {
      this.props.saveDepartment(dataSave);
    } else {
      this.props.editDepartment(dataEdit);
    }

    this.clearState();
  };

  clearState = () => {
    this.setState({
      formState: "Registrar",
      departmentId: "",
      department: "",
    });
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Col>
              <h4>
                <b>{this.state.formState}</b> departamento
              </h4>
            </Col>
            <Form noValidate onSubmit={this.onSubmit}>
              <Form.Group>
                <Form.Label>Ingreso de departamento</Form.Label>
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.department}
                  id="department"
                  type="text"
                  placeholder="Ingrese un departamento"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Guardar cambios
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

DepartmentRegister.propTypes = {
  saveDepartment: PropTypes.func.isRequired,
  editDepartment: PropTypes.func.isRequired,
  department: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  department: state.department,
});

export default connect(mapStateToProps, {
  saveDepartment,
  editDepartment,
})(withRouter(DepartmentRegister));
