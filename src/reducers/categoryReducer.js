import {
    GET_LIST_CATEGORIES,
  } from "../actions/types.js";
  
  //const isEmpty = require("is-empty");
  
  //Inicializa el estado inicial del store para los roles de usuario...
  const initialState = {
    categories: [],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_LIST_CATEGORIES:
        return {
          ...state,
          categories: action.payload,
        };
      default:
        return state;
    }
  }
  