import React from "react";
import { Link } from "react-router-dom";

function Logo(props) {
    return (
        <div className="logo">
            {/* <img style={{ width: props.lsize }} src={props.src}alt="logo" /> */}
            <Link style={{ display: props.show === "true" ? "unset" : "none", color: props.color }} className="nav-item" to='/'>SeekCruiter</Link>
        </div>
    )
}
export default Logo;