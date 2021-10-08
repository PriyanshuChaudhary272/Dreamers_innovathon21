import React from "react";
import { Link } from "react-router-dom";

function Logo(props) {
    return (
        <div className="logo">
            <img style={{ width: props.lsize }} src="https://cdn-icons-png.flaticon.com/512/992/992615.png" alt="logo" />
            <Link style={{ display: props.show === "true" ? "unset" : "none" }} className="nav-item" to='/'>SeekCruiter</Link>
        </div>
    )
}
export default Logo;