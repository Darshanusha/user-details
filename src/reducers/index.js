import { reducer } from "redux-form";
import { combineReducers } from 'redux';
import userReducer from "./userReducer";

export default combineReducers({
    form: reducer,
    userReducer: userReducer
})