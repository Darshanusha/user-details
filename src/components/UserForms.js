import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class UserForm extends Component{

    renderTextboxAndLabel = (ele)=>{
        return(
            <div>
                <label>{ele.label}</label>
                <input className = "form-control" type = "text" name = {ele.name} autoComplete = "off" {...ele.input} />
                {this.renderError(ele.meta)}
            </div>
        );
    }
    submit = (formElement) =>{
        this.props.onSub(formElement);
    }

    renderError =(meta)=>{
        if(meta.error && meta.touched){
            return(
                <div className = "text-danger">
                    * {meta.error}
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.props.handleSubmit(this.submit)} className = "form-group col-md-11" >
                    <Field name = "name" label = "Name" component = {this.renderTextboxAndLabel} />
                    <Field name = "dep" label = "Department" component = {this.renderTextboxAndLabel} />
                    <br/>
                    <button type = "submit" className = "btn btn-primary" >Submit</button>
                </form>
            </div>
        );
    }
}

const validate = (formEle) =>{
    const error = {}
    if(!formEle.name){
        error.name = "Please enter name";
    }
    if(!formEle.dep){
        error.dep = "Please enter department";
    }
    return error;
}

export default reduxForm({
    form: 'userForm',
    validate: validate,
    enableReinitialize: true
})(UserForm);