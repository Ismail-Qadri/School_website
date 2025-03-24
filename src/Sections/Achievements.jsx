import React, { useState } from "react";
import "../styles/achievements.css";
// import tenthResultImg from "../assets/tenth-result.jpg";
// import twelfthResultImg from "../assets/twelfth-result.jpg";
// import graduationImg from "../assets/graduation.jpg";
// import sportsImg from "../assets/sports.jpg";
// import extracurricularImg from "../assets/extracurricular.jpg";

const achievementsData = [
  { 
    title: "10th Result", 
    content: "Our students achieved a 98% pass percentage with top ranks.", 
    image: tenthResultImg 
  },
  { 
    title: "12th Result", 
    content: "An outstanding 95% success rate, with many students scoring above 90%.", 
    image: twelfthResultImg 
  },
  { 
    title: "Graduation Result", 
    content: "Alumni excel in top universities with a strong academic foundation.", 
    image: graduationImg 
  },
  { 
    title: "Sports Achievements", 
    content: "Our students won state-level championships in football and athletics.", 
    image: sportsImg 
  },
  { 
    title: "Extra-Curricular Achievements", 
    content: "Debate, music, and arts competitions were won at district and state levels.", 
    image: extracurricularImg 
  }
];

const Achievements = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="achievements-container">
      <h2 className="achievements-heading">Our Achievements</h2>
      <div className="accordion">
        {achievementsData.map((item, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-title" onClick={() => toggleAccordion(index)}>
              <h3>{item.title}</h3>
              <span>{activeIndex === index ? "▲" : "▼"}</span>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">
                <p>{item.content}</p>
                <img src={item.image} alt={item.title} className="achievement-image" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
