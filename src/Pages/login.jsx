import React, { useState } from "react";
import Label from "../Components/formlabelinput";
function Login() {
    function prevent(e) {
        e.preventDefault();
    }
    
    return (
        <div className="login-page-content">
            <div className="login-div">
                <div className="login-form-div">
                    <h2>Sign in to your account</h2>
                    <form action="#nowhere">
                        <div className = "login-row">
                            <label htmlFor="email" >Email</label>
                            <input type="email" id="email" />
                        </div>
                        <div className = "login-row">
                            <label htmlFor="Password">Password</label>
                            <input type="Password" id="Password" />
                        </div>
                        <div className="login-row">
                            <button >Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login;