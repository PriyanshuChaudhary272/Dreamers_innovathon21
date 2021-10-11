import React from "react";
import Label from "../Components/formlabelinput";
import Icons from "../Components/icons";
function UploadCV() {

    return (
        <div className="login-page-content">
            <div className="Signup-process">
                <p><span>Sign up</span>  -  <span>Profile</span>  -  <span style={{ color: "green" }}>Upload CV</span>  -  <span >Done</span></p>
            </div>
            <div className="login-div">
                <div className="login-form-div CV">
                    <h2>Upload a Resume or CV</h2>
                        <Icons src="https://cdn-icons.flaticon.com/png/512/896/premium/896846.png?token=exp=1633767434~hmac=3b599eba0298dfdc988af4db1b96397d" lsize="2.7rem" />
                    <form action="/Profile">
                        <Label className="upload-file" class="input-file" htmlFor="file" type="file" id="file" />
                        <Label htmlFor = "Profile image" type = "file" id = "profileimage" label = "Profile image" />
                        <div className="login-row">
                            <button type = "submit" className = "button-login">Upload Resume</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default UploadCV;