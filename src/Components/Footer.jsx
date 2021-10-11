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
                    <li><Link className="nav-item footer-links" to="4"><Icons src="https://cdn-icons-png.flaticon.com/512/466/466963.png" lsize="1.5rem" /></Link></li>
                </ul>
            </div>
        </div>
    );
}
export default Footer;