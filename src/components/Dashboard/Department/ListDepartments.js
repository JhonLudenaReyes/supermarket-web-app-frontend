import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Table, Button } from "react-bootstrap";

import { getListDepartments } from "../../../actions/departmentActions";

class ListDepartments extends Component {
  componentDidMount() {
    this.getDepartments();
  }
/*
  componentDidUpdate(prevProps) {
    const { listRolesByRole } = this.props.role;
    if (listRolesByRole === prevProps.role.listRolesByRole) {
      this.getListRole();
    }
  }
*/
  getDepartments = () => {
    this.props.getListDepartments();
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
              <th>
                Acciones{" "}
                <Link
                  to="#"
                  className="btn btn-outline-primary"
                >
                  Agregar
                </Link>
              </th>
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
                  >
                    Editar
                  </Button>{" "}
                  <Link
                    to="#"
                    className="btn btn-outline-primary"
                  >
                    Eliminar
                  </Link>
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
  department: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  department: state.department,
});

export default connect(mapStateToProps, {
  getListDepartments,
})(withRouter(ListDepartments));
