import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './App.css';

import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
//import Form from "./Components/Form";
import Home from "./Components/Home";
import About from "./Components/About";
import Favorites from "./Components/Favorites";
import Contact from "./Components/Contact";

import Footer from "./Components/Footer";



function App() {
  //set the books state and the setter function
const [ books, setBooks ] = useState();
//const [bookList, setBookList] = useState;
  //pass as prop to booklist
function handleAddBook(newBook) {
  
  //using the spread operator so i dont mutate the original array
  const newBooksArray = [...books, newBook]

  //i need to pass a new object or array to setState when using functional component
  //or i wont get a rerender
  setBooks(newBooksArray);

}





  return (
    <Router>
      <Header />
      <NavBar />
      

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/favorites' element={ <Favorites /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
      
      <Footer />
    </Router>
  )
}

export default App;


//  trying to create routes for /home /about and /contacts for starters