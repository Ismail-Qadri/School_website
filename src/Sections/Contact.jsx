import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import "../styles/contact.css"
function Contact() {

    const mapContainerStyle = {
        position: "relative",
        width: "100%",
        height: "200px",
      };
    
      // Coordinates for HCL Noida
      const hclNoidaLocation = {
        lat: 26.7583,
        lng: 83.1850,
      };

  return (
    <section id="contact">
    <div id="contact" className="container-contact">
      {/* <div className="contact-one">
        <h1>About Us</h1>
        <p className="about-para-one">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div> */}
      <div className="contact-two">
       
        <h1>Contact us at:</h1>
        <p className="about-para">Location: <b>RRT Inter College, Jonhiya, Bhitirawat Sahjanwa, Gorakhpur</b></p>
        <p className="about-para">Email: <b>rrtic2008@gmail.com</b></p>
        <p className="about-para">Phone: <b>7398006700</b></p>
    
      </div>
      <div className="contact-three">
       <LoadScript >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={hclNoidaLocation}
            zoom={20}
          >
            <Marker position={hclNoidaLocation} />
          </GoogleMap>
        </LoadScript>
      </div>
      
    </div>
    </section>
  );
}

export default Contact;
