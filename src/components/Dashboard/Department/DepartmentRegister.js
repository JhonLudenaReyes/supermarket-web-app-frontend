import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { saveDepartment } from "../../../actions/departmentActions";
//import { editUserRegister } from "../../../actions/userActions";
//import { getUser } from "../../../actions/userActions";
//import { getActionToDo } from "../../../actions/userActions";

class DepartmentRegister extends Component {
  state = {
    formState: "Registrar",
    department: "",
  };

  componentDidMount() {}

/*
  componentDidUpdate(prevProps) {
    const { actionToDo } = this.props.user;
    const { user } = this.props.user;
    if (user !== prevProps.user.user) {
      this.changeState(user);
      //this.props.getActionToDo(false);
    }
  }

  //Esta función recibe los datos del ususario y actualiza el state con esos datos
  changeState = (user) => {
    this.setState({
      userId: user.idUsuario,
      firstName: user.nombre,
      lastName1: user.apellidoUno,
      lastName2: user.apellidoDos,
      email: user.email,
      user: user.usuario,
      password: user.contrasenia,
      userComments: user.observacionesUsuario,
      userState: user.estado,
    });
  };
*/
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  
  //handleClickClose = () => {
  //  this.props.getActionToDo(false);
  //};

  onSubmit = (e) => {
    e.preventDefault();

    const dataSave = {
      department: this.state.department,
    };
/*
    const dataEdit = {
      nombre: this.state.firstName,
      apellidoUno: this.state.lastName1,
      apellidoDos: this.state.lastName2,
      email: this.state.email,
      usuario: this.state.user,
      contrasenia: this.state.password,
      observacionesUsuario: this.state.userComments,
      estatusUsuario: this.state.userState,
      idUsuario: this.state.userId,
    };

    const { actionToDo } = this.props.user;
    if (actionToDo === false) {
      this.props.saveUserRegister(dataSave);
    } else {
      this.props.editUserRegister(dataEdit);
    }
*/
    this.props.saveDepartment(dataSave);
    this.clearState();
  };

  clearState = () => {
    this.setState({
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
  department: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  department: state.department,
});

export default connect(mapStateToProps, {
  saveDepartment,
  //editUserRegister,
  //getUser,
  //getActionToDo,
})(withRouter(DepartmentRegister));