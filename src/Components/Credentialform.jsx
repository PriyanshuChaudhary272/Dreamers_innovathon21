import React from "react";

function Credentialform(props) {
    return (
        <div className="Credential-row">
            <label htmlFor={props.htmlFor} >{props.label}</label>
                <textarea
                className =  "input-text"
                id={props.label} />  
        </div>
    );
}
export default Credentialform;