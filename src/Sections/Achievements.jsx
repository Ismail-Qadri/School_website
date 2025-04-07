import React, { useState } from "react";
import "../styles/achievements.css";
import tenthResultImg from "../assets/10result.png";
import twelfthResultImg from "../assets/12result.png";
import graduationImg from "../assets/home-poster-1.jpg";
import sportsImg from "../assets/Sports-pic.jpeg"
import extracurricularImg from "../assets/achievement1.png";
import extracurricularImg2 from '../assets/achievement2.png';
import graduation_result from "../assets/Graduation_Result.pdf";

const achievementsData = [
  { 
    title: "10th Result", 
    // content: "Our students achieved a 98% pass percentage with top ranks.", 
    image: tenthResultImg 
  },
  
  { 
    title: "12th Result", 
    // content: "An outstanding 95% success rate, with many students scoring above 90%.", 
    image: twelfthResultImg 
  },
  { 
    title: "Graduation Result", 
    // content: "Alumni excel in top universities with a strong academic foundation.", 
    // image: graduationImg 
    showDownload: true
  },
  { 
    title: "Sports", 
    // content: "Our students won state-level championships in football and athletics.", 
    image: sportsImg 
  },
  { 
    title: "Extra-Curricular Achievements", 
    // content: "Debate, music, and arts competitions were won at district and state levels.", 
    image: extracurricularImg,
    extraImage: extracurricularImg2
    
  }
];

const Achievements = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="achievements">
    <div className="achievements-container">
      <h2 className="achievements-heading">Our Achievements</h2>
      <div className="accordion">
        {achievementsData.map((item, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-title" onClick={() => toggleAccordion(index)}>
              <h3>{item.title}</h3>
              <span>{activeIndex === index ? "▲" : "▼"}</span>
            </div>
            {/* {activeIndex === index && (
              <div className="accordion-content">
                <p>{item.content}</p>
                <img src={item.image} alt={item.title} className="achievement-image" />
              </div>
            )} */}
            {activeIndex === index && (
  <div className="accordion-content">
    {item.content && <p>{item.content}</p>}
    
    {item.image && (
      <img src={item.image} alt={item.title} className="achievement-image" />
    )}
    
    {item.extraImage && (
      <img
        src={item.extraImage}
        alt={`${item.title} Extra`}
        className="achievement-image"
      />
    )}

    {item.showDownload && (
      <a
        href={graduation_result}
        download="Graduation Result.pdf"
        className="download-button"
      >
        Download Graduation Result
      </a>
    )}
  </div>
)}

          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Achievements;
