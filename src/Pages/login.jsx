import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
function Login() {
    function prevent(e){
        e.preventDefault();
    }
    return (
        <div className="login-page-content">
            {/* <h3>ACCOUNT LOGIN</h3> */}
            <div className="login-div">
                <div className="login-form-div">
                    <h4>Sign in to your account</h4>
                    <form action="/profile">
                        <label htmlFor="email">Email</label>
                        <input type="email" name = "email" id = "email" autoComplete = "off"/>
                        <hr />
                        <label htmlFor="Password">Password</label>
                        <input type="password" name= "password" id = "password" autoComplete = "off" />
                        <button type ="submit" onClick = {prevent}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login;