import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { addUser } from '../actions';
import UserForms from './UserForms';

class AddUser extends Component{

    addUserDetails = (user) =>{
        this.props.addUser(user);
    }

    render(){
        return(
            <div>
                <UserForms onSub = {this.addUserDetails} />
            </div>
        );
    }
}

export default connect(null,{addUser})(AddUser);