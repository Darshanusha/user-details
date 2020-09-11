import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { addUser } from '../actions';

class AddUser extends Component{


    renderLabelAndTextBox = (ele) => {
        return(
            <div>
                <label>{ele.label}</label>
                <input className = "form-control" type = "text" name = {ele.name} {...ele.input} autoComplete = 'off'></input>
            </div>
        );
    }

    addUserDetails = (user) =>{
        console.log(user);
        this.props.addUser(user);
    }

    render(){
        return(
            <div>
                <h3>Add User</h3>
                <form className = "form-group col-md-11" onSubmit = {this.props.handleSubmit(this.addUserDetails)} >
                    <Field name = "name" label = "Name" component = {this.renderLabelAndTextBox} />
                    <Field name = "dep" label = "Department" component = {this.renderLabelAndTextBox} />
                    <br/>
                    <button type = 'submit' className = "btn btn-success" >Submit</button>
                </form>
            </div>
        );
    }
}

export default connect(null,{addUser})(reduxForm({
    form: "addUser"
})(AddUser));