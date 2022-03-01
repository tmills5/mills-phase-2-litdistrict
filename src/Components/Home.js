import React, { useEffect, useState } from "react";


function Home() {
  
  const [poems, setPoems] = useState([]);
  
   //-----------------------------------------------------------
   useEffect(()=> { //grabbing the poems as side effect. 
     getRandomPoems();
     
  }, [])

  const getRandomPoems = () => {
    fetch("https://www.poemist.com/api/v1/randompoems")
      .then(response => response.json())
      .then(poems => {
        setPoems(poems); //setting state to random generated poems
        
      })
  } 

  //--------------------------------------------------------------
    useEffect(()=> {
      document.title = "The Lit District - Home";
    },[]);

  //--------------------------------------------------------------
    
  
    return (
       <div className="poems-parent-div">
        <h4 className="poems-opening-text" >Here are a few random poems to get your mind wandering...</h4>
        {poems.map((poem) => (
          <div className="poem-stack" key={poem.title}>
            <h3 className="poem-title">Title: {poem.title}</h3>
            <h4 className="poem-poet-name">Poet: {poem.poet.name}</h4>
            <p className="poem-content">{poem.content}</p>
          </div>
        ))}
      </div> 
      )
}


export default Home;