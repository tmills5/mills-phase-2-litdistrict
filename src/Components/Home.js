import React, { useEffect, useState } from "react";
// import { Card, Button } from "react-bootstrap";
// import Booklist from "./Booklist";




function Home() {
   //Random Poem Generator
   //set to empty array bc fetching takes time and map is trying to iterate over nothing
   //could try and do a loading state 

   const [poems, setPoems] = useState([]);
   //const [loading, setLoading] = useState(false);
   

  const getRandomPoems = () => {
    fetch("https://www.poemist.com/api/v1/randompoems")
      .then(response => response.json())
      .then(poems => {
        //console.log(poems)
        //console.log(poems[0]["title"])
        setPoems(poems); //setting state to random generated poems
      })
  } 


  useEffect(()=> {
     getRandomPoems()
  }, [])

  

  //Changing the title on the webpage tab
    useEffect(()=> {
      document.title = "home";
    },["home"]);

  
  

    return (
      <div className="poems-parent-div" >
        {poems.map((poem) => (
          <div key={poem.title}>
            <h3>{poem.title}</h3>
            <h4>{poem.poet.name}</h4>
            <p>{poem.content}</p>
          </div>
        ))}
      </div>
    )
}


export default Home;