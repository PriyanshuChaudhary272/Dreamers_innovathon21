import React from "react";
import { Link } from "react-router-dom";
import Icons from "./icons";
import Logo from "./logo";

function Footer() {
    var d = new Date();
    var y = d.getFullYear();
    return (
        <div id="footer">
            <div className="footer-logo">
                <Logo className="footer-links" show="true" color="black" />
                
                <p>SeekCruiter &copy; {y}</p>
            </div>
            <div className="footer-links">
                <ul className="navigation-links">
                    <li><Link className="nav-item footer-links" to="/">About</Link></li>
                    <li><Link className="nav-item footer-links" to="/">Contact</Link></li>
                    <li><Link className="nav-item footer-links" to="4">Help</Link></li>
                </ul>
                <ul className="navigation-links">
                    <li><Link className="nav-item footer-links" to="/"><Icons src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" lsize="1.5rem" /></Link></li>
                    <li><Link className="nav-item footer-links" to="2"><Icons src="https://cdn-icons-png.flaticon.com/512/747/747374.png" lsize="1.5rem" /></Link></li>
                    <li><Link className="nav-item footer-links" to="4"><Icons src="https://cdn-icons.flaticon.com/png/512/739/premium/739257.png?token=exp=1633937929~hmac=4a9f67ea6b0957e8161ba853b970e83e" lsize="1.5rem" /></Link></li>
                </ul>
            </div>
        </div>
    );
}
export default Footer;