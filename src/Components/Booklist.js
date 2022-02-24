import React from "react";
import { Card, Button } from "react-bootstrap";

    //Styling the card with bootstrap. 

    const Booklist = (props) => { //passing in props from favorites Parent
        //  const books = props.books;
        //  const deleteBook = props.deleteBook;
        //  const filteredBooks = props.filteredBooks;
            //console.log(props) //---->WORKS!!
        const { books, deleteBook, filteredBooks, setFilteredBooks} = props;
            

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
                    <Button variant="primary" onClick={() => deleteBook(book.id)}>Delete</Button>
                    </Card.Body>

                </Card>
            </div>
            ))
            }
        </div> 
      )
    }


export default Booklist;