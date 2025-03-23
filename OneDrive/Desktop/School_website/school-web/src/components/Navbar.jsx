import React from "react";
import "../styles/navbar.css";
import logo from "../assets/logo-school.png";
import fee_icon from "../assets/online-fee-icon.png";
import campus_care_login from "../assets/campus-care-login-icon.png";

const Navbar = ({ scrollToSection }) => {
  return (
    <header>
      {/* Top Navbar */}
      <nav className="top-navbar">
        <div className="logo">
          <img src={logo} alt="School Logo" />
        </div>

        <div className="center">
          <h1 className="school-name"><b>LITTLE FLOWER SCHOOL GIDA, GORAKHPUR</b></h1>
          <div className="bulletins">
            <span><i>• Affiliated to CBSE New Delhi</i></span>
            <span><i>• Affiliation No - 2131370</i></span>
          </div>
        </div>

        <div className="links">
          <div className="online-fee-sec">
            <img src={fee_icon} alt="Fee Icon" />
            <a href="#">ONLINE FEE PAYMENT</a>
          </div>
          <div className="care-login">
            <img src={campus_care_login} alt="Campus Care Login" />
            <a href="#">CAMPUS CARE LOGIN</a>
          </div>
        </div>
      </nav>

      {/* Bottom Navbar - Scroll Navigation */}
      <nav className="bottom-navbar">
        <ul>
          <li><button onClick={() => scrollToSection("home")}>Home</button></li>
          <li><button onClick={() => scrollToSection("about")}>About Us</button></li>
          <li><button onClick={() => scrollToSection("messages")}>Messages</button></li>
          <li><button onClick={() => scrollToSection("gallery")}>Gallery</button></li>
          <li><button onClick={() => scrollToSection("achievements")}>Achievements</button></li>
          <li><button onClick={() => scrollToSection("admission")}>Admission & Fee Structure</button></li>
          <li><button onClick={() => scrollToSection("office")}>Office Bearers</button></li>
          <li><button onClick={() => scrollToSection("contact")}>Contact Us</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
