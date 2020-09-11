import React, { Component } from 'react';
import { getAllUsers } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ListUser extends Component {

    componentDidMount() {
        this.props.getAllUsers();
    }

    renderAllUsers = () => {
        return (
            this.props.list.map((user) => {
                return (
                    <div key = {user.id} >
                        <div><h4>Name: {user.name}</h4></div>
                        <div>Department: {user.dep}</div>
                        <Link to = {`/user/edit/${user.id}`} >Edit</Link>
                        <hr/>
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
                {console.log(this.props.list)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {list: Object.values( state.userReducer)}
}

export default connect(mapStateToProps, { getAllUsers })(ListUser);