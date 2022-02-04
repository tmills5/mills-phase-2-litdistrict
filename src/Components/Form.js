import React, { useState } from "react";

function Form() {

    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [image, setImage] = useState();

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

        const book = { title, author, image }; //destructoring book 
            //console.log(book); //----WORKS!
        fetch("http://localhost:7000/books", {       //this whatever port i designate or what is given..like 3000
            method: "POST", //type of method IE get, post, etc
            headers: {"Content-type": "application/json"}, //type of content im sending. im sending json data
            body: JSON.stringify(book) //actual data im sending. have to turn obkect into json string, "JSON.stringify does this"
        })
    }


    return(
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Title' value={title} onChange={handleTitleChange} key={"book.title"}/>
            <input type='text' placeholder='Author' value={author} onChange={handleAuthorChange}  />
            <input type='text' placeholder='Image Source' value={image} onChange={handleImageChange} />
            <button type='submit' id='submit' name='submit'>Submit</button>
        </form>
    )
}

export default Form;