import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Table, Button } from "react-bootstrap";

import { getListCategories } from "../../../actions/categoryActions";
//import { changeVerification } from "../../../actions/departmentActions";
//import { setDepartment } from "../../../actions/departmentActions";
//import { deleteDepartment } from "../../../actions/departmentActions";

class ListCategories extends Component {
  componentDidMount() {
    this.getCategories();
  }
  /*
  componentDidUpdate(prevProps) {
    const { verification } = this.props.department;
    if (verification !== prevProps.department.verification) {
      this.getDepartments();
      this.props.changeVerification(false);
    }
  }
*/
  getCategories = () => {
    this.props.getListCategories();
  };
  /*
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
*/
  render() {
    const { categories } = this.props.category;

    return (
      <>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Departamento</th>
              <th>Categoria</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{category.department.department}</td>
                <td>{category.category}</td>
                <td>{category.state}</td>
                <td>
                  <Button
                    variant="outline-primary"
                    //onClick={() =>
                    //  this.handleClickEdit(
                    //    department.departmentId,
                    //    department.department
                    //  )
                    //}
                  >
                    Editar
                  </Button>{" "}
                  <Button
                    variant="outline-primary"
                    //onClick={() =>
                    //  this.handleClickDelete(department.departmentId)
                    //}
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

ListCategories.propTypes = {
  getListCategories: PropTypes.func.isRequired,
  //changeVerification: PropTypes.func.isRequired,
  //setDepartment: PropTypes.func.isRequired,
  //deleteDepartment: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  category: state.category,
});

export default connect(mapStateToProps, {
  getListCategories,
  //changeVerification,
  //setDepartment,
  //deleteDepartment,
})(withRouter(ListCategories));
