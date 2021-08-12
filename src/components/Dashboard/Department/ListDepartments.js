import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Table, Button } from "react-bootstrap";

import { getListDepartments } from "../../../actions/departmentActions";
import { changeVerification } from "../../../actions/departmentActions";
import { setDepartment } from "../../../actions/departmentActions";
import { deleteDepartment } from "../../../actions/departmentActions";

class ListDepartments extends Component {
  componentDidMount() {
    this.getDepartments();
  }

  componentDidUpdate(prevProps) {
    const { verification } = this.props.department;
    if (verification !== prevProps.department.verification) {
      this.getDepartments();
      this.props.changeVerification(false);
    }
  }

  getDepartments = () => {
    this.props.getListDepartments();
  };

  handleClickEdit = (departmentId, department) => {
    const data = {
      departmentId,
      department,
    };
    //console.log(data);
    this.props.setDepartment(data);
  };

  handleClickDelete = (departmentId) => {
    this.props.deleteDepartment(departmentId);
  };

  render() {
    const { departments } = this.props.department;

    return (
      <>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Id Departamento</th>
              <th>Departamento</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{department.departmentId}</td>
                <td>{department.department}</td>
                <td>{department.state}</td>
                <td>
                  <Button
                    variant="outline-primary"
                    onClick={() =>
                      this.handleClickEdit(
                        department.departmentId,
                        department.department
                      )
                    }
                  >
                    Editar
                  </Button>{" "}
                  <Button
                    variant="outline-primary"
                    onClick={() =>
                      this.handleClickDelete(department.departmentId)
                    }
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

ListDepartments.propTypes = {
  getListDepartments: PropTypes.func.isRequired,
  changeVerification: PropTypes.func.isRequired,
  setDepartment: PropTypes.func.isRequired,
  deleteDepartment: PropTypes.func.isRequired,
  department: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  department: state.department,
});

export default connect(mapStateToProps, {
  getListDepartments,
  changeVerification,
  setDepartment,
  deleteDepartment,
})(withRouter(ListDepartments));
