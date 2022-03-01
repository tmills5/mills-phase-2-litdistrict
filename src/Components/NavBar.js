import React from "react";
import { Link } from "react-router-dom";




function Navbar() {
    return (
        <nav className="navBar">
            <Link className="navlink" to='/'>home</Link>
            <Link className="navlink" to='/about'>about</Link>
            <Link className="navlink" to='/favorites'>favorites</Link>
        </nav>
    )
}

export default Navbar;