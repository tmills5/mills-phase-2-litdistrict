import React from "react";
import BookCard from "./BookCard";


const BookCardContainer = (props) => { //passing in props from favorites Parent

    const { results, deleteBook } = props;

    return (
        
        <div className="cardParent" >
           {results.map((book) => {
               return (<BookCard key={book.id} book={book} results={results} deleteBook={deleteBook} />)
                })
            }
        </div> 
  )
}


export default BookCardContainer;