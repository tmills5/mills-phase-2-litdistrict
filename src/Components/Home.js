import React, { useEffect, useState } from "react";
// import { Card, Button } from "react-bootstrap";
// import Booklist from "./Booklist";
import "./Home.css";



function Home() {
   //just using a random api to practice
  function beerList() {
    fetch("https://api.openbrewerydb.org/breweries")
      .then(response => response.json())
      .then(beers => {
        console.log(beers)
      })
  } 
  

//Changing the title on the webpage tab
    useEffect(()=> {
      document.title = "home";
    },["home"]);


    return (
      <div className="cardParent">
        <h1>HOME!!!</h1>
      </div>
      
    )
}


export default Home;