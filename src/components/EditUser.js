import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { editUser, getUser } from '../actions';
import UserForms from './UserForms';

class EditUser extends Component {

    componentDidMount(){
        this.props.getUser(this.props.match.params.id);
    }

    onSubmit = (formVal)=>{
        this.props.editUser(this.props.match.params.id,formVal);
    }

    renderEdit = ()=>{
        if(this.props.user === []){
            console.log("empty");
            return <div>Loading ..!</div>
        }else{
            console.log("not empty")
            return <div>
            <UserForms initialValues = {{name:this.props.user.name, dep: this.props.user.dep}} onSub = {this.onSubmit}/>
            </div>;
        }
    }


    render() {
        return (
            <div>
                {console.log("usr ",this.props.user)}
                {this.renderEdit()}
            </div>
        );
    }
}


const mapStateToProps = (state) =>{
    return {user:state.userReducer};
}

export default connect(mapStateToProps,{ editUser, getUser })(EditUser);