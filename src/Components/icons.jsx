import React from "react";
// import { Link } from "react-router-dom";

function Icons(props) {
    return (
        <div className="logo">
            <img style={{ width: props.lsize }} src={props.src}alt="logo" />
        </div>
    )
}
export default Icons;