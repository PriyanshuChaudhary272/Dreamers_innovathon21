import React from "react";
// import Label from "../Components/formlabelinput";
function Signup() {
    function prevent(e) {
        e.preventDefault();
    }
    
    return (
        <div className="login-page-content">
            <div className="login-div">
                <div className="login-form-div">
                    <h2>Sign up</h2>
                    <form action="#nowhere">
                        <div className = "login-row">
                            <label htmlFor="email" >Username</label>
                            <input type="text" id="username"/>
                        </div>
                        <div className = "login-row">
                            <label htmlFor="Password">Email</label>
                            <input type="email" id="email"/>
                        </div>
                        <div className = "login-row">
                            <label htmlFor="Password">Password</label>
                            <input type="Password" id="Password"/>
                        </div>
                        <div className="login-row">
                            <button onClick ={prevent} >Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Signup;