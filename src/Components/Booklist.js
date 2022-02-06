import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Booklist.css";

//Styling the card with bootstrap. 

    const Booklist = (props) => { //passing in props from favorites Parent
        const books = props.books;
            //console.log(props) //---->WORKS!!

        function deleteBook() {
            //console.log("bye");  //----WORKS!!!
            
        }


      return (
       <div className="cardParent">
           {books.map((book) => (
            <div key={book.id}>   
                <Card style={{ width: '18rem' }}  >
                <Card.Img src={book.image} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        {book.text}
                    </Card.Text>
                <Button variant="primary" onClick={deleteBook}>Delete</Button>
                </Card.Body>
                </Card>
            </div>
            ))
            }
        </div> 
      )
    }

export default Booklist;    