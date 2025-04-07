import React from "react";
import '../styles/faculties.css';
import facultyPDF from '../assets/faculties-list.pdf'; // adjust the path based on your file location


// import "./FacultyInfo.css";

const FacultyInfo = () => {
  return (
    <div className="faculty-container">
      <h2 className="faculty-heading">Our Esteemed Faculty</h2>

      <p className="faculty-description">
        Our faculty members are a blend of experienced academicians, industry experts,
        and passionate mentors dedicated to nurturing knowledge and innovation.
      </p>

      <a
        href={facultyPDF}
        download="Faculty_Details.pdf"
        className="download-button"
      >
        📄 Download Full Faculty PDF
      </a>
    </div>
  );
};

export default FacultyInfo;

