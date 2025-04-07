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
       <h1 className='school-name-about'>RRT EDUCATIONAL GROUP </h1>
       {/* <em>Little Flower School GIDA, Gorakhpur is a private unaided Catholic Christian Minority co-educational English Medium School established and governed by the Catholic Diocese of Gorakhpur Education Society under the Article 30(1) of the Indian Constitution. </em> */}
       {/* <p>It is reached upto Senior Secondary and affiliated to the Central Board of Secondary Education, New Delhi(affiliation no. 2131370). It was founded on 7th July 2003 with 56 students in class LKG and UKG with 5 members in the teaching staff. It runs classes from Lower Kinder-Garten (LKG) to Class XII. Being governed by the Catholic Church, a minority community, the school has the primary objective of educating children of the community.</p> */}
       <p> Smt. R.R.T. Inter College, Jonhiya, Bhiti Rawat, Gorakhpur, founded in 
2008, is an English Medium school for the students established and administered 
by R.R.T. welfare society. The school is started by Late Sri Raj Dev Yadav Ji, who 
is the well wisher of the society. His personal attachment towards the society 
inspired him to start a new school for the development of the children who are in 
the villages as well cities. </p>
<ul className='about-ul'>
 <b><i>Aim of the School</i></b>
 <li>Personal growth: intellectual, moral, physical, psychological and social</li>
 
 <li>Progressive and holistic development of the child - fully human, wholly 
Indian, truly modern</li>
 <li>A fun filled and exciting experience of learning</li>
 <li>Self discipline through moral instructions</li>
 <li>Leadership skills through participation and involvement in co-curricular 
activities</li>
 <li>Power of expression through public speaking, debates, dramatics, 
elocution, extempore, music and creative writing</li>
 <li>Preparing students for future careers.</li>
 <li>Shaping citizens who serve society with confidence and dignity.</li>

 </ul>
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
