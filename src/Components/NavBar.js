import React from "react";
import { Link } from "react-router-dom";



function Navbar() {
    return (
        <nav>
            <Link to='/'>home</Link>
            <Link to='/about'>about</Link>
            <Link to='/favorites'>favorites</Link>
            <Link to='/contact'>contact</Link>
        </nav>
    )
}

export default Navbar;