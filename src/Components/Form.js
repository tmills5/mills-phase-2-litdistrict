import React, { useState, } from "react";
import Booklist from "./Booklist";

function Form(props) {
    const {books, setBooks} = props

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");
    

    //handler change functions--------------------------

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleAuthorChange(event) {
        setAuthor(event.target.value);
    }

    function handleImageChange(event) {
        setImage(event.target.value);
    }

    //handle submit function-----------------------------

    function handleSubmit(event) {
        event.preventDefault();

        const newBook = { title, author, image }; //destructoring book 
            //console.log(book); //----WORKS!
        

        fetch("http://localhost:8000/books", {       //this whatever port i designate or what is given..like 3000
            method: "POST", //type of method IE post,delete, etc--"posting" a new book to the db.json
            headers: {"Content-type": "application/json"}, //type of content im sending. im sending json data
            body: JSON.stringify(newBook) //actual data im sending. have to turn object into json string, "JSON.stringify does this"
        })
            .then(response => response.json())
            .then(newBook => {
                //console.log(newBook);  //-------WORKS!!
                const addedBook = [...books, newBook] //spread copies books and adds the new book. doesn't mutate array
                setBooks(addedBook);   //updates the state with added, new book
                setTitle(""); //resets the state for form title
                setAuthor(""); //resets the state for form author
                setImage(""); //resets the state for form image
            })
                 
    }


    return(
        <div>
            
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Title...' value={title} onChange={handleTitleChange} />
                <input type='text' placeholder='Author...' value={author} onChange={handleAuthorChange}  />
                <input type='text' placeholder='Image Source...' value={image} onChange={handleImageChange} />
                <button type='submit' id='submit' name='submit'>Submit</button>
            </form>
            
        </div>
    )
}

export default Form;