import React from "react";
import { Link } from "react-router-dom";

function Icons(props) {
    return (
        <div className="logo">
            <img style={{ width: props.lsize }} src={"https://cdn-icons.flaticon.com/png/512/4300/premium/4300058.png?token=exp=1633939314~hmac=76746ac85826e57ddf6f1cb6332c90e1"}alt="logo" />
        </div>
    )
}
export default Icons;