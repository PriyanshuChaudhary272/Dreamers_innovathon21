import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Logo from './logo';
import Icons from './icons';

function Navbar(props) {
    const [navbar, setNavbar] = useState(false);
    const [login, setLogin] = useState(false);
    const handleNavbarcolor = () => {
        if (window.scrollY >= 71)
            setNavbar(true);
        else
            setNavbar(false);
    }
    window.addEventListener('scroll', handleNavbarcolor);

        return (
            <nav className={navbar ? "container_ active" : "container_"}>
                <Logo src="https://cdn-icons-png.flaticon.com/512/992/992615.png" lsize="2.7rem" show="true" />
                <ul className="navigation-links">
                    <li><Link className="nav-item" to="/Recruit">Start up</Link></li>
                    <li><Link className="nav-item" to="/Startup">Recruit</Link></li>
                    <li><Link className="nav-item" to="4">Blog</Link></li>
                    <li><a className="nav-item" href="/#More">More</a></li>
                </ul>
                {login ?
                    <ul className="navigation-links login-icon">
                        <li><Link className="nav-item footer-links" to="/Profile"><Icons src="https://cdn-icons.flaticon.com/png/512/2102/premium/2102633.png?token=exp=1633872296~hmac=e03ef4885bacb495c8fc3e1ba4d9e930" lsize="1.7rem" /></Link></li>
                    </ul>
                    :
                    <ul className="navigation-links">
                        <li><Link className="nav-item" to="/Signup">Sign up</Link></li>
                        <li><Link className="nav-item" to="/Login">Log in</Link></li>
                    </ul>
                }
            </nav>
        )
}
export default Navbar;