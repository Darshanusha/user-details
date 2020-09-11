import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { editUser } from '../actions';

class EditUser extends Component {


    renderTextBoxAndLabel = (ele) => {
        return(
            <div>
                <label>{ele.label}</label>
                <input className = "form-control" type = "text" name = {ele.name} {...ele.input} autoComplete = 'off' />
            </div>
        );
    }

    editUserDetails = (user) =>{
        this.props.editUser(this.props.match.params.id,user);
    }

    render() {
        return (
            <div>
                {console.log(this.props.match.params.id)}
                <form className = "form-group col-md-11" onSubmit = {this.props.handleSubmit(this.editUserDetails)} >
                    <h3>Edit User</h3>
                    <Field name="name" component={this.renderTextBoxAndLabel} label="Name" />
                    <Field name="dep" component={this.renderTextBoxAndLabel} label="Department" />
                    <br/>
                    <button className = "btn btn-primary" >Submit</button>
                </form>
            </div>
        );
    }
}

export default connect(null,{ editUser })(reduxForm({
    form: "editForm"
})(EditUser));