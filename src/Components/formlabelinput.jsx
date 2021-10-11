import React from "react";

function Label(props) {
    return (
        <div className="login-row">
            <label htmlFor={props.htmlFor} >{props.label}</label>
            <input className = "input-text"  type={props.type} id={props.id} placeholder= {props.placeholder}/>
        </div>
    );
}
export default Label;