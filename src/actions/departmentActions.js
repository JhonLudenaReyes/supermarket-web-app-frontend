import axios from "axios";

import {
  GET_LIST_DEPARTMENTS,
} from "./types.js";

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