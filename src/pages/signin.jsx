// src/pages/signin.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/signin.css';
import logo from '../pictures/logo.png';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <form className="form-signin">
            <img className="mb-4" src={logo} alt="" width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="username" className="sr-only">Username</label>
            <input type="text" id="username" className="form-control" placeholder="Username" required autoFocus />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <div className="mt-3">
                <label>Don't have an account yet? Click to <Link to="/signup" className="btn btn-link">Register</Link></label>
            </div>
            <p className="mt-5 mb-3 text-muted">&copy; 2024</p>
        </form>
    );
};

export default Signin;
