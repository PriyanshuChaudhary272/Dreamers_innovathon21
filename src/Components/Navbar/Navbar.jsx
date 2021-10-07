import React from 'react'
import Logo from '../dLogo/logo';
function Navbar() {
    return (
        <nav>
            {/* <div className ="logo">
                <a href=""><img id="logo-img" src="https://cdn-icons-png.flaticon.com/512/992/992615.png" alt="logo" /></a>
                <a className="nav-item" href="">SeekCruiter</a>
            </div> */}
            <Logo lsize = "2.7rem" show = "true"/>
            <ul className ="navigation-links">
                <li><a className="nav-item" href="1">Start up</a></li>
                <li><a className="nav-item" href="2">Recruit</a></li>
                <li><a className="nav-item" href="3">Invest</a></li>
                <li><a className="nav-item" href="4">Blog</a></li>
                <li><a className="nav-item" href="5">More</a></li>
            </ul>
            <ul className= "navigation-links">
                <li><a className="nav-item" href="6">Sign up</a></li>
                <li><a className="nav-item" href="7">Log in</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;