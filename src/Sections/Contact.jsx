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
        lat: 28.5385,
        lng: 77.3366,
      };

  return (
    <section id="contact">
    <div id="contact" className="container-contact">
      <div className="contact-one">
        <h1>About Us</h1>
        <p className="about-para-one">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div className="contact-two">
       
        <h1>Contact us at:</h1>
        <p className="about-para">Location: <b>Noida Sec-126</b></p>
        <p className="about-para">Email: <b>sporthaton@hcl.com</b></p>
        <p className="about-para">Phone: <b>123-456-7890</b></p>
    
      </div>
      <div className="contact-three">
       <LoadScript >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={hclNoidaLocation}
            zoom={15}
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
