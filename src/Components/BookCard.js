import React from "react";
import { Card, Button } from "react-bootstrap";




function BookCard( {deleteBook, book} ) {
    const { title, author, image, id } = book;
    
    
    return(
        <div className="cardDiv"  >
            
            <Card className="card" style={{ width: '15rem' }} >
                <Card.Img src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {author}
                    </Card.Text>
                <Button variant="primary" onClick={() => deleteBook(id)}>Delete</Button>
                </Card.Body>
            </Card>
            
        </div>
    )
}

export default BookCard;