import React, { useEffect } from "react";


function About() {

    //Changing the title on the webpage tab

    useEffect(()=> {
        document.title = "about";
      },["about"]);
  
    return (
        <div className="about-component">
            <h1 className="about-title">About...</h1>
            <p className="about-content">
                The Literature District is a simple place where you can come and relax. 
                The home page has random poems for your enjoyment and if you have a book in mind
                feel free to add it to your list in the "favorites". If you would like some different poems 
                then just refresh the page!
            </p>
            <img className="about-book-img" src="https://cdn.pixabay.com/photo/2017/08/06/22/01/books-2596809__340.jpg" alt="bookshelves" />
        </div>
    )
}

export default About;