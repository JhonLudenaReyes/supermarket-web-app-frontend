import axios from "axios";

import {
  GET_LIST_DEPARTMENTS,
  SAVE_DEPARTMENT,
  CHANGE_VERIFICATION,
  SET_DEPARTMENT,
  EDIT_DEPARTMENT,
  DELETE_DEPARTMENT,
} from "./types.js";

export const changeVerification = (data) => (dispatch) => {
  dispatch({
    type: CHANGE_VERIFICATION,
    payload: data,
  });
};

//Esta acción obtiene de la base de datos la lista de roles de usuario según los permisos de rol del ususario que está logoneado en el sistema...
export const getListDepartments = () => (dispatch) => {
  axios
    .get(`/supermarket/web-service/api/departments/active-departments`)
    .then((res) =>
      dispatch({
        type: GET_LIST_DEPARTMENTS,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

//Esta acción guarda los datos del usuario que se está registrando
export const saveDepartment = (data) => (dispatch) => {
  axios
    .post(`/supermarket/web-service/api/departments/save`, data)
    .then((res) =>
      dispatch(
        {
          type: SAVE_DEPARTMENT,
          payload: res.data,
        },
        alert("Sus datos han sido guardados con exito")
      )
    )
    .catch((err) => console.log(err));
};

export const setDepartment = (department) => (dispatch) => {
  dispatch({
    type: SET_DEPARTMENT,
    payload: department,
  });
};

export const editDepartment = (data) => (dispatch) => {
  axios
    .put(`/supermarket/web-service/api/departments/update-department`, data)
    .then((res) =>
      dispatch(
        {
          type: EDIT_DEPARTMENT,
          payload: res.data,
        },
        alert("Sus datos han sido actualizado con exito")
      )
    )
    .catch((err) => console.log(err));
};

export const deleteDepartment = (departmentId) => (dispatch) => {
  var r = confirm("Está seguro que desea eliminar este registro");
  if (r == true) {
    axios
      .put(
        `/supermarket/web-service/api/departments/delete-department-by-id/${departmentId}`
      )
      .then((res) =>
        dispatch(
          {
            type: DELETE_DEPARTMENT,
            payload: res.data,
          },
          alert("El registro se ha eliminado correctamente")
        )
      )
      .catch((err) => console.log(err));
  } else {
    alert("Sus datos no se han modificado");
  }
};
