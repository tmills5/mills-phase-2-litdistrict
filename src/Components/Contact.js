import React, {useEffect} from "react";

function Contact() {

//changing website title on tab

    useEffect(()=> {
        document.title = "contact";
      },["contact"]);

    return (
        <div className="contact-component">
            <h1>Contact...</h1>
            
        </div>
    )
}

export default Contact;