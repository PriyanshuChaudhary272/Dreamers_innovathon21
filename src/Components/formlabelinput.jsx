import React from "react";

function Label(props) {
    return (
        <div >
            <label htmlFor={props.for}>{props.text}</label>
            <input type={props.type}id={props.id} name={props.name}/>
        </div>
    );
}
export default Label;