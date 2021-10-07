import React from "react";

function Logo(props) {
    return (
        <div className="logo">
            <img style={{ width: props.lsize }} src="https://cdn-icons-png.flaticon.com/512/992/992615.png" alt="logo" />
            <a dstyle={{ display: props.show === "true" ? "unset" : "none" }} className="nav-item" href='1'>SeekCruiter</a>
        </div>
    )
}
export default Logo;