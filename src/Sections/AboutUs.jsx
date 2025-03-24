import React from 'react';
import '../styles/aboutus.css';
import msg_icon from "../assets/msg_icon.svg";
import download_icon from "../assets/download-icon.png";

const AboutUs = () => {
  return (
    <section id='about'>
    <div className="about-us-container">
      <div className="left-about-container">
       <h3 className='heading-about'>ABOUT US</h3>
       <h1 className='welcome-head-about'>Welcome to</h1>
       <h1 className='school-name-about'>Little FLower School, Gida</h1>
       <emm>Little Flower School GIDA, Gorakhpur is a private unaided Catholic Christian Minority co-educational English Medium School established and governed by the Catholic Diocese of Gorakhpur Education Society under the Article 30(1) of the Indian Constitution. </emm>
       <p>It is reached upto Senior Secondary and affiliated to the Central Board of Secondary Education, New Delhi(affiliation no. 2131370). It was founded on 7th July 2003 with 56 students in class LKG and UKG with 5 members in the teaching staff. It runs classes from Lower Kinder-Garten (LKG) to Class XII. Being governed by the Catholic Church, a minority community, the school has the primary objective of educating children of the community.</p>
       {/* <button className='readmore-about'>READ MORE</button> */}
      </div>
      {/* <div className="right-about-container">
        <div className="right-container-border">
       <div className='right-inner-div'>
        <div className='notice-about'>
          <img src={msg_icon} alt='' />
          <h3>NOTICE</h3>
        </div>
        <div className='btn-icon'>
          <button><img src={download_icon} alt='' />DOWNLOADS</button></div>
       </div>
       <div>
       <a href="#">Admission Open for 2025-2026</a>
       <a href="#">Entrance Result 13-03-2025</a>
       <a href="#">Entrance Result 14-02-2025</a>
       <a href="#">Entrance Result 01-02-2025</a>
      </div>
      </div>
      </div>    */}

<div className="vision-mission-container">
      {/* Vision Box */}
      <div className="vision-box">
        <h2 className="title">Our Vision</h2>
        <p className="description">
          To create a dynamic learning environment that nurtures excellence, innovation, and strong values, preparing students for a bright future.
        </p>
      </div>

      {/* Mission Box */}
      <div className="mission-box">
        <h2 className="title">Our Mission</h2>
        <p className="description">
          We aim to provide a high-quality education that fosters curiosity, creativity, and critical thinking, empowering students to achieve their fullest potential.
        </p>
      </div>
      </div>
    </div>
    </section>
  );
};

export default AboutUs;
