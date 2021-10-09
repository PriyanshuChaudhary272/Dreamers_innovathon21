import React from 'react'
import {Link} from "react-router-dom";
import Logo from './logo';
 function Navbar(props) {
    return (
        <nav className = "container_">
            <Logo lsize = "2.7rem" show = "true"/>
            <ul className ={props.className}>
                <li><Link className="nav-item" to="/">Start up</Link></li>
                <li><Link className="nav-item" to="2">Recruit</Link></li>
                <li><Link className="nav-item" to="3">Invest</Link></li>
                <li><Link className="nav-item" to="4">Blog</Link></li>
                <li><Link className="nav-item" to="5">More</Link></li>
            </ul>
            <ul className= {props.className}>
                <li><Link className="nav-item" to="6">Sign up</Link></li>
                <li><Link className="nav-item" to="/Login">Log in</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;