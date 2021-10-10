import React from "react";
import Label from "../Components/formlabelinput";
function Signup() {
    // function prevent(e) {
    //     e.preventDefault();
    // }
    
    return (
        <div className="login-page-content">
            <div className ="Signup-process">
                <p><span style = {{color: "green"}}>Sign up</span>  -  <span>Upload CV</span>  -  <span>Done</span></p>
            </div>
            <div className="login-div">
                <div className="login-form-div">
                    <h2>Sign up</h2>
                    <form action="/UploadCV">
                        <Label class = "input-text" htmlFor="username" label = "Username" type="text" id="username" />
                        <Label class = "input-text" htmlFor="email" label = "Email" type="email" id="email" />
                        <Label class = "input-text" htmlFor="Password" label ="Password" type="Password" id="Password" />
                        <div className="login-row">
                            <button className = "button-login">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Signup;