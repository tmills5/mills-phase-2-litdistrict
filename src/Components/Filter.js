import React, { useEffect, useState } from "react";

function Filter(props) {
    const books = props.books;
    const filteredBooks = props.filteredBooks;
    const setFilteredBooks = props.setFilteredBooks;

    
        const handleFilterChange = (e) => {
            setFilteredBooks(e.target.value)
        } 
 
        const results = !filteredBooks ? books : books.filter((book)=> 
            book.title.toLowerCase().includes(filteredBooks.toLowerCase())
        )
        //console.log(results)
    return(
        <div>
            <input type="text" placeholder="filter" value={filteredBooks} onChange={handleFilterChange} />

            {results.map((book)=> {
                return (
                    <h4 key={book.id}>{book.title}</h4>
                )
            })}
        </div>
    )
}

export default Filter;