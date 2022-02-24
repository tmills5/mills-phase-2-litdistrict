import React, { useState, useEffect } from "react";
import Booklist from "./Booklist";
import Form from "./Form";
import Filter from "./Filter";





function Favorites() {
    const [books, setBooks] = useState(null);
    const [filteredBooks, setFilteredBooks] = useState("");

//Get request---set the fetch to a variable, then called the variable in the useEffect
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
        fetch(`http://localhost:8000/books/${id}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(() => {
            setBooks(books.filter((book)=> book.id !== id)) //books state being updated with the array in which the book id gone 
        })
    }
    

    useEffect(() => {
        document.title = "The Lit District - Favorites";
    }, [])

    


    return (
        <div>
            
            <h4>Use the Form to add a book to your favorites list!</h4>
            <Form books={books} setBooks={setBooks} getBooks={getBooks} />
            {books && <Filter books={books} filteredBooks={filteredBooks} setFilteredBooks={setFilteredBooks} />}
            {books && <Booklist books={books} deleteBook={deleteBook} filteredBooks={filteredBooks} setFilteredBooks={setFilteredBooks} />}        {/*logical and operator-reads books first so doesnt read null. Passing books and deleteBooks as props to booklist */}
            
        </div>
    )
}


export default Favorites;