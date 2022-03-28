import React from "react";
import { Card, Button } from "react-bootstrap";




function BookCard( {deleteBook, book} ) {
    const { title, author, image, id } = book;
    
    
    return(
        <div className="cardDiv"  >
            
            <Card className="card" style={{ width: '15rem' }} >
                <Card.Img src={image || "https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
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