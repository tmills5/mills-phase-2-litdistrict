import React from "react";
import BookCard from "./BookCard";


const BookCardContainer = ({ results, deleteBook }) => { //passing in props from favorites Parent


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