import React from "react";

function Label(props) {
    return (
        <div className="login-row">
            <label htmlFor={props.htmlFor} >{props.label}</label>
            <input className = {props.class} type={props.type} id={props.id} />
        </div>
    );
}
export default Label;