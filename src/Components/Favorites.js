import React, { useState, useEffect } from "react";
import Booklist from "./Booklist";
import Form from "./Form";

function Favorites() {
    const [books, setBooks] = useState(null);

    useEffect(() => {
      fetch('http://localhost:8000/books') //fetching the request
        .then(response => response.json()) //returning a promise in JS object
        .then(books => { //console.log(data) //----WORKS!!
            setBooks(books);
        })
    }, [])



    useEffect(() => {
        document.title = "favorites"
    }, [])



    return (
        <div>
            <Form books={books}/>
            {books && <Booklist books={books}/>} {/*logical and operator-reads books first so doesnt read null */}
        </div>
    )
}
export default Favorites;