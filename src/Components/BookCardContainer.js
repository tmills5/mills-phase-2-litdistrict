import React from "react";
import { Card, Button } from "react-bootstrap";
 

const BookCardContainer = (props) => { //passing in props from favorites Parent

    const { deleteBook, results } = props;
        
    return (
        
    <div className="cardParent">
       {results.map((book) => (
        <div className="cardDiv" key={book.id} >   
            <Card className="card" style={{ width: '15rem' }} >
                <Card.Img src={book.image} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        {book.author}
                    </Card.Text>
                <Button variant="primary" onClick={() => deleteBook(book.id)}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
        ))
        }
    </div> 
  )
}


export default BookCardContainer;