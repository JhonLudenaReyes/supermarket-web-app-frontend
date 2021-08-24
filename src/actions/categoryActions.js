import axios from "axios";

import {
  GET_LIST_CATEGORIES,
} from "./types.js";

export const getListCategories = () => (dispatch) => {
  axios
    .get(`/supermarket/web-service/api/categories/department-with-categories`)
    .then((res) =>
      dispatch({
        type: GET_LIST_CATEGORIES,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};