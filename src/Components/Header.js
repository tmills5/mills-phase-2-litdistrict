import React from "react";
import Navbar from "./NavBar";

export default function Header() {
    return (
        <>
        <header>
            <Navbar />
            <h1 className="header-text">
                <span>
                    <img className="header-img-left" src="https://cdn.pixabay.com/photo/2016/11/22/21/33/books-1850645_960_720.jpg" alt="glasses on book" />
                </span>
                The Literature District...
                <span>
                    <img className="header-img-right" src="https://cdn.pixabay.com/photo/2016/11/22/21/33/books-1850645_960_720.jpg" alt="glasses on book" />
                </span>
            </h1>
            
        </header>
        </>
    )
};