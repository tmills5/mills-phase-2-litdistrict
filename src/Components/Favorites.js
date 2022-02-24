import React, { useState, useEffect } from "react";
import BookCardContainer from "./BookCardContainer";
import Form from "./Form";






function Favorites() {
    const [books, setBooks] = useState(null);
    const [bookTitleSearch, setBookTitleSearch] = useState("");

    //Get request---set the fetch to a variable, then called the variable in the useEffect-----------
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

    //----------------------------------------------------
    useEffect(() => {
        document.title = "The Lit District - Favorites";
    }, [])

    //---------------------------------------------------
    function deleteBook(id) {
        fetch(`http://localhost:8000/books/${id}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(() => {
            // could assign to a variable and pass into setBooks also. IE const newArray = books.filter((book)=> book.id !== id)
            // then pass newArray into setBooks()
            setBooks(books.filter((book)=> book.id !== id)) //books state being updated with the array in which the book id gone 
        })
    }
    
    //----------filtering through books to search for title-------------
    const handleTitleSearchChange = (e) => {
        e.preventDefault()
        setBookTitleSearch(e.target.value)
    }

    const results = !bookTitleSearch ? books : books.filter((book)=> 
         book.title.toLowerCase().includes(bookTitleSearch.toLowerCase())
    )
    


    return (
        <div>
            <h4>Use the Form to add a book to your favorites list!</h4>
            <Form books={books} setBooks={setBooks} />
            <input className="title-search-input" type="text" placeholder="Search by Book Title..." value={bookTitleSearch} onChange={handleTitleSearchChange} />
            {books && <BookCardContainer deleteBook={deleteBook} results={results}/>}        {/*logical and operator-reads books first so doesnt read null. Passing books and deleteBooks as props to booklist */}
        </div>
    )
}


export default Favorites;