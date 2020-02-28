import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function Login(props) {
    // How can we log in? What do we need to do?
    const [login, setLogin] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('login', login)
            .then(res => {
                window.localStorage.setItem('token', res.data.payload)
                props.history.push('/creatures');
            })
            .catch(err => {
                console.log(`Login error: ${err}`)
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='username'
                    name='username'
                    value={login.username}
                    label='username'
                    onChange={handleChange}
                    className='input'
                />
                <input
                    type='password'
                    placeholder='password'
                    name='password'
                    value={login.password}
                    label='password'
                    onChange={handleChange}
                    className='input'
                />
                <button className='start'>Login</button>
            </form>
        </div>
    );
}
