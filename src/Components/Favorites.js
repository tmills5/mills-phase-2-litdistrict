import React, { useState, useEffect } from "react";
import Booklist from "./Booklist";

function Favorites() {
    const [books, setBooks] = useState(null);

    useEffect(() => {
      fetch('http://localhost:8000/books') //fetching the request
        .then(response => response.json()) //returning a promise in JS object
        .then(data => { //console.log(data) //----WORKS!!
            setBooks(data);
        })
    }, [])

    useEffect(() => {
        document.title = "favorites"
    }, [])

    return (
        <div>
            {books && <Booklist books={books}/>}
        </div>
    )
}
export default Favorites;