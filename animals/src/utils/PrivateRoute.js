import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    // const token = window.localStorage.getItem('token');
    return (
        <Route
            {...rest}
            render={props =>
                localStorage.getItem('token') ? (
                    <Component {...props} />
                ) : (
                    <Redirect to='/creatures' />
                )
            }
        />
    );
};

export default PrivateRoute;

// render={props => {
//     if (token) {
//         return <Component {...props} />
//     } else {
//         return <Redirect to='/login' />
//     }
// }}
