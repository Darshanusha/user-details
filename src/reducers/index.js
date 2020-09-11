import { formValues } from "redux-form";
import { combineReducers } from 'redux';
import userReducer from "./userReducer";

export default combineReducers({
    form: formValues,
    userReducer: userReducer
})