import React, { useEffect, useState } from "react";


function Home() {
   //Random Poem Generator
   //set to empty array bc fetching takes time and map is trying to iterate over nothing
   //could try and do a loading state 

   const [poems, setPoems] = useState([]);
   
   

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
      <div className="poems-parent-div">
        <h4>Here are a few random poems to get your mind wandering...</h4>
        {poems.map((poem) => (
          <div className="poem-stack" key={poem.title}>
            <h3 className="poem-title">{poem.title}</h3>
            <h4 className="poem-poet-name">Poet: {poem.poet.name}</h4>
            <p className="poem-content">{poem.content}</p>
          </div>
        ))}
      </div>
    )
}


export default Home;