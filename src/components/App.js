import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history/History';
import AddUser from './AddUser';
import EditUser from './EditUser';
import DeleteUser from './DeleteUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListUser from './ListUser';
import NavBar from './NavBar';

class App extends Component {
    render() {
        return (
            <div>
                <Router history={history} >
                    <div>
                        <NavBar />
                    </div>
                    <Route exact path="/user/add" component={AddUser} />
                    <Route exact path="/user/edit/:id" component={EditUser} />
                    <Route exact path="/user/delete/:id" component={DeleteUser} />
                    <Route exact path="/user/list" component={ListUser} />
                </Router>
            </div>
        );
    }
}

export default App;