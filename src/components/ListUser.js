import React, { Component } from 'react';
import { getAllUsers } from '../actions';
import { connect } from 'react-redux';

class ListUser extends Component {

    componentDidMount() {
        this.props.getAllUsers();
    }

    renderAllUsers = () => {
        return (
            this.props.userReducer.map((user) => {
                return (
                    <div key = {user.id} >
                        <div><h4>Name: {user.name}</h4></div>
                        <div>Department: {user.dep}<hr/></div>
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <div>
                <h3><b>List of Users</b></h3>
                <hr/>
                {this.renderAllUsers()}
                {console.log(this.props.userReducer)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { getAllUsers })(ListUser);