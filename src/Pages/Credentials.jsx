import React from "react";
import Label from "../Components/formlabelinput";
import Credentialform from "../Components/Credentialform";
import Logo from "../Components/logo";
// import Icons from "../Components/icons";
function Credential() {
    return (
        <div className="login-page-content Credential-page-content">
            <div className="Signup-process">
                <p><span>Sign up</span> - <span style={{ color: "green" }}>Profile</span>  -  <span>Upload CV</span>  -  <span>Done</span></p>
            </div>
            <div className="login-div Credential-div">
                <div className="login-form-div">
                    <h2>Create your Profile</h2>
                    <form action="/UploadCV">
                        <Credentialform
                            htmlFor="Recidance"
                            label="Where are you based?"
                        />
                        <Credentialform
                            htmlFor="Education"
                            label="Education?"
                        />
                        <Credentialform
                            htmlFor="text"
                            label="Skills?"
                        />
                        <Credentialform
                            htmlFor="Interest"
                            label="Interest?"
                        />
                        <Credentialform
                            htmlFor="Interest"
                            label="Interest?"
                        />
                        <Credentialform
                            htmlFor="Interest"
                            label="About?"
                        />
                        <div className="login-button-row">
                            {/* <button className="button-login">Sign up</button> */}
                            <button style={{ backgroundColor: "Salmon" }} className="button-login">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Credential