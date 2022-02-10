import React, { useEffect } from "react";


function About() {

    //Changing the title on the webpage tab

    useEffect(()=> {
        document.title = "about";
      },["about"]);
  
    return (
        <div className="about-component">
            <h1>About...</h1>
            <p>
                
            </p>
        </div>
    )
}

export default About;