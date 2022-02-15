import React, { useState, } from "react";

function Form(props) {
    const books = props.books;  //passing in books as a prop from parent Favorites
        //console.log(books) //---->WORKS!
    //const setBooks = props.setBooks;
    const getBooks = props.getBooks;

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
            method: "POST", //type of method IE post,delete, etc
            headers: {"Content-type": "application/json"}, //type of content im sending. im sending json data
            body: JSON.stringify(newBook) //actual data im sending. have to turn object into json string, "JSON.stringify does this"
        })
            .then(response => response.json())
            .then(newBook => {
                //console.log(newBook);  //-------WORKS!!
                getBooks();   //calls the fetch again. has the updated list from the form entry
                setTitle(""); //resets the state for form title
                setAuthor(""); //resets the state for form author
                setImage(""); //resets the state for form image
            })
                 
    }


    return(
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Title...' value={title} onChange={handleTitleChange} />
            <input type='text' placeholder='Author...' value={author} onChange={handleAuthorChange}  />
            <input type='text' placeholder='Image Source...' value={image} onChange={handleImageChange} />
            <button type='submit' id='submit' name='submit'>Submit</button>
        </form>
    )
}

export default Form;