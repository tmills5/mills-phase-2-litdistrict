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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed. Ornare massa eget egestas purus viverra accumsan. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Enim lobortis scelerisque fermentum dui faucibus in. Pellentesque habitant morbi tristique senectus et netus et. Vulputate mi sit amet mauris commodo quis imperdiet. Vitae auctor eu augue ut lectus. Sem integer vitae justo eget magna fermentum iaculis eu. Augue eget arcu dictum varius duis at consectetur. A diam maecenas sed enim ut sem viverra aliquet. Non tellus orci ac auctor augue mauris. Tellus mauris a diam maecenas. Magna fermentum iaculis eu non diam phasellus vestibulum. Nisl vel pretium lectus quam. Eget mauris pharetra et ultrices.
            </p>
        </div>
    )
}

export default About;