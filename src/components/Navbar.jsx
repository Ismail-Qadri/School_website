import React from "react";
import "../styles/navbar.css";
import logo from "../assets/RRT-LOGO.svg";
// import fee_icon from "../assets/online-fee-icon.png";
// import campus_care_login from "../assets/campus-care-login-icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const downloadPDF = () => {
    const pdfPath ="/public/Fee-Structure-RRT-Inter-College.pdf";
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Fee_Structure-Inter-College.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header>
      {/* Top Navbar */}
      <nav className="top-navbar">
        <div className="logo">
          <img src={logo} alt="School Logo" />
        </div>

        <div className="center">
          <h1 className="school-name"><b>RRT EDUCATIONAL GROUP, JOHNIYA, SAHJANWA, GK</b></h1>
          <div className="bulletins">
            <span><i>• Affiliated to UP Board</i></span>
            <span><i>• Affiliation No - 2131370</i></span>
          </div>
        </div>

        {/* <div className="links">
          <div className="online-fee-sec">
            <img src={fee_icon} alt="Fee Icon" />
            <a href="#">ONLINE FEE PAYMENT</a>
          </div>
          <div className="care-login">
            <img src={campus_care_login} alt="Campus Care Login" />
            <a href="#">CAMPUS CARE LOGIN</a>
          </div>
        </div> */}
      </nav>

      {/* Bottom Navbar - Scroll Navigation */}
      <nav className="bottom-navbar">
        <ul>
          <li><button onClick={() => scrollToSection("home")}>Home</button></li>
          <li><Link to="/degree-college"><button>Degree College</button></Link></li>
          <li><Link to="/iti-college"><button>ITI College</button></Link></li>
          <li><button onClick={() => scrollToSection("about")}>About Us</button></li>
          <li><button onClick={() => scrollToSection("messages")}>Messages</button></li>
          <li><button onClick={() => scrollToSection("faculties")}>Faculties</button></li>
          <li><button onClick={() => scrollToSection("gallery")}>Gallery</button></li>
          <li><button onClick={() => scrollToSection("achievements")}>Achievements</button></li>
          {/* <li><button onClick={() => scrollToSection("admission")}>Fee Structure</button></li> */}
          <li><button onClick={downloadPDF}>Fee Structure</button></li>
          <li><button onClick={() => scrollToSection("facility")}>Facilities</button></li>
          <li><button onClick={() => scrollToSection("contact")}>Contact Us</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
