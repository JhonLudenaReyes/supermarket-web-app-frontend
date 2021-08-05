import {
  GET_LIST_DEPARTMENTS,
} from "../actions/types.js";

//const isEmpty = require("is-empty");

//Inicializa el estado inicial del store para los roles de usuario...
const initialState = {
  departments: [],
  //verification: false,
  //role: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    //Almacena en listRolesByRole los roles de usuario por rol en el store...
    case GET_LIST_DEPARTMENTS:
      return {
        ...state,
        departments: action.payload,
      };
    default:
      return state;
  }
}
