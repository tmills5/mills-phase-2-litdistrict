import React, { useState, useEffect } from "react";
import Booklist from "./Booklist";
import Form from "./Form";

function Favorites() {
    const [books, setBooks] = useState(null);
//Get request

    useEffect(() => {
        getBooks();
    }, [])

    function getBooks() {
      fetch('http://localhost:8000/books') //fetching the request
        .then(response => response.json()) //returning a promise in JS object
        .then(books => { //console.log(data) //----WORKS!!
            setBooks(books);
        })
    }

    function deleteBook(id) {
        //console.log(id) //---WORKS!!
        //alert(id); //---WORKS!!!
        fetch(`http://localhost:8000/books/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(books => {
                getBooks();
            })
    }



    useEffect(() => {
        document.title = "favorites"
    }, [])



    return (
        <div>
            <Form books={books}/>
            {books && <Booklist books={books} deleteBook={deleteBook}/>} {/*logical and operator-reads books first so doesnt read null */}
        </div>
    )
}
export default Favorites;