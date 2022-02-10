import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import LikeBtn from "./LikeBtn";

//Styling the card with bootstrap. 

    const Booklist = (props) => { //passing in props from favorites Parent
         const books = props.books;
         const deleteBook = props.deleteBook;
            console.log(props) //---->WORKS!!



      return (
       <div className="cardParent">
           {books.map((book) => (
            <div className="cardDiv" key={book.id} >   
                <Card className="card" style={{ width: '15rem' }} >
                <Card.Img src={book.image} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        {book.author}
                    </Card.Text>
                <Button variant="primary" onClick={()=>deleteBook(book.id)}>Delete</Button>
                <LikeBtn />
                </Card.Body>
                </Card>
            </div>
            ))
            }
        </div> 
      )
    }


export default Booklist;