import {
  GET_LIST_DEPARTMENTS,
  SAVE_DEPARTMENT,
  CHANGE_VERIFICATION,
  SET_DEPARTMENT,
  EDIT_DEPARTMENT,
  DELETE_DEPARTMENT,
} from "../actions/types.js";

const isEmpty = require("is-empty");

//Inicializa el estado inicial del store para los roles de usuario...
const initialState = {
  departments: [],
  verification: false,
  department: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    //Almacena en listRolesByRole los roles de usuario por rol en el store...
    case CHANGE_VERIFICATION:
      return {
        ...state,
        verification: action.payload,
      };
    case GET_LIST_DEPARTMENTS:
      return {
        ...state,
        departments: action.payload,
      };
    case SAVE_DEPARTMENT:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case SET_DEPARTMENT:
      return {
        ...state,
        department: action.payload,
      };
    case EDIT_DEPARTMENT:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case DELETE_DEPARTMENT:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    default:
      return state;
  }
}
