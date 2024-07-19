import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/signup.css'; 
import logo from '../pictures/logo.png';

const Register = () => {
    return (
        <div className="container">
            <div className="register-container">
                <div className="register-logo">
                    <img id='logo' src={logo} alt="Logo" width="150" height="150" />
                </div>
                <div className="register-form">
                    <form>
                        <h1 className="h3 mb-3 font-weight-normal text-center">Register</h1>
                        <label htmlFor="username" className="sr-only">Username</label>
                        <input type="text" id="username" className="form-control" placeholder="Username" required autoFocus />
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                        <input type="password" id="confirmPassword" className="form-control" placeholder="Confirm Password" required />
                        <button className="btn btn-primary btn-block" type="submit">Register</button>
                        <p className="mt-4 text-muted text-center">© 2024</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
