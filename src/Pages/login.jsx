import React from "react";
import Label from "../Components/formlabelinput";
function Login() {
    // function prevent(e) {
    //     e.preventDefault();
    // }
    
    return (
        <div className="login-page-content">
            <div className="login-div">
                <div className="login-form-div">
                    <h2>Sign in to your account</h2>
                    <form action="/Profile">
                        <Label class = "input-text" htmlFor="email" label = "Email" type="email" id="email" />
                        <Label class = "input-text" htmlFor="Password" label ="Password" type="Password" id="Password" />
                        <div className="login-row">
                            <button className= "button-login" >Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login;