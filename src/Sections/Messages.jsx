import React from "react";
import "../styles/messages.css"; 
import principal_img from "../assets/principal-img.png";
import manager_img from "../assets/manager-msg.png";

const Messages = () => {
  return (
    <section id="messages">
    <div className="msg-component">
    <div className="msg-container-all">
    <div className="message-container-p">
      {/* Left Side: Principal's Image */}
      <div className="principal-image">
        <img src={principal_img} alt="Principal" />
      </div>

      {/* Right Side: Message Content */}
      <div className="message-content-p">
        <h2 className="message-heading-p">PRINCIPAL’S <span className="red-text">MESSAGE</span></h2>
        <p className="message-text-p">
        I am extremely happy to extend a warm welcome to you at Little Flower School Gida .It is with
        profound joy and utmost satisfaction I note this fact that our school stands as a symbol of 
        educational innovation,character formation,commitment to nurturing each individual’s potential.        </p>
        <button className="read-more-btn-p">Read More</button>
      </div>
    </div>
    <div>
    <div className="message-container-m">
      {/* Left Side: Principal's Image */}
      <div className="manager-image">
        <img src={manager_img} alt="Principal" />
      </div>

      {/* Right Side: Message Content */}
      <div className="message-content-m">
        <h2 className="message-heading-m"> MANAGER’s <span className="red-text">MESSAGE</span></h2>
        <p className="message-text-m">
        Liberation is the panacea that all look forward in the era of sophistication and complexity. 
        Education leaves no stone unturned to address this herculean task of the pursuit and 
        attainment of liberation with erudite endeavors, vigor and enthusiasm. Scholastic 
        advancements that our school undertakes prove the same without fail.
        </p>
        <button className="read-more-btn-m">Read More</button>
      </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
};

export default Messages;
