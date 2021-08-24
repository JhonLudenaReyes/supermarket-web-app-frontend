import { combineReducers } from "redux";
import departmentReducer from "./departmentReducer";
import categoryReducer from "./categoryReducer";

export default combineReducers({
  department: departmentReducer,
  category: categoryReducer,
});
