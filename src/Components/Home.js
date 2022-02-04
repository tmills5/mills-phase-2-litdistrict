import React, { useEffect, useState } from "react";
// import { Card, Button } from "react-bootstrap";
import Booklist from "./Booklist";
import "./Home.css";



function Home() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    fetch('http://localhost:7000/books') //fetching the request
      .then(response => response.json()) //returning a promise in JS object
      .then(data => { //console.log(data) //----WORKS!!
          setBooks(data);
      })
  }, []) //empty dependency array. fires only one time the component renders but maybe add "books" so fires everytime variable changes?


//Changing the title on the webpage tab

    useEffect(()=> {
      document.title = "home";
    },["home"]);


    return (
      <div className="cardParent">
        {books && <Booklist books={books}/>}
            {/* had to put in books && cause reading null at first-needed info there */}
            {/* logical AND operator returns true if both are true-reads books first, then <Booklist /> */}
      </div>
      
    )
}


export default Home;