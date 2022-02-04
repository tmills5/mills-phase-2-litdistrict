import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Booklist.css";

//Styling the card with bootstrap. 

    const Booklist = ({books}) => {
      return (
       <div className="cardParent">
           {books.map((book) => (
            <div key={book.title}>   
                <Card style={{ width: '18rem' }}  >
                <Card.Img src={book.image} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        {book.text}
                    </Card.Text>
                <Button variant="primary">Add to favorites...</Button>
                </Card.Body>
                </Card>
            </div>
            ))
            }
        </div> 
      )
    }

export default Booklist;    