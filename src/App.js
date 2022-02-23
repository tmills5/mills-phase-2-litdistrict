import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './App.css';

import Header from "./Components/Header";
// import NavBar from "./Components/NavBar";
//import Form from "./Components/Form";
import Home from "./Components/Home";
import About from "./Components/About";
import Favorites from "./Components/Favorites";



import Footer from "./Components/Footer";



function App() {



  return (
    <Router>
      <Header />
      {/* <NavBar /> put in the header */}
      

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/favorites' element={ <Favorites /> } />
        
      </Routes>
      
      <Footer />
    </Router>
  )
}

export default App;