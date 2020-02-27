import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import './App.css';
import Login from './components/Login.js';
import Header from './components/Header.js';

const App = () => {
    return (
        <Router>
            <div className='App'>
                <Header />
                <Switch>
                    {/* <PrivateRoute /> */}
                    <Route exact path='/login' component={Login} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
