import { formValues } from "redux-form";
import { combineReducers } from 'redux';

export default combineReducers({
    form: formValues,
})