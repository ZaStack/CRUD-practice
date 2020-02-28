import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Login from './components/Login.js';
import Header from './components/Header.js';
import AnimalDashboard from './components/AnimalDashboard';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className='App'>
                <Header />
                <Switch>
                    <PrivateRoute exact path='/creatures' component={AnimalDashboard} />
                    <Route exact path='/login' component={Login} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
