import React, { useEffect, useState } from "react";
// import { Card, Button } from "react-bootstrap";
// import Booklist from "./Booklist";




function Home() {
   //just using a random api to practice

  const getRandomPoems = () => {
    fetch("https://www.poemist.com/api/v1/randompoems")
      .then(response => response.json())
      .then(poems => {
        
        console.log(poems)
        
      })
  } 

  useEffect(()=> {
     getRandomPoems()
  }, [])
   
  const [ poems, setPoems ] = useState("")

//Changing the title on the webpage tab
    useEffect(()=> {
      document.title = "home";
    },["home"]);


    return (
      <div>
        {/* <div>
          {poems.map((poem)=> (
            <h1>{poem.title}</h1>
        ))}
        </div> */}
      </div>
      
    )
}


export default Home;