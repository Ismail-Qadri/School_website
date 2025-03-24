import React from "react";
import "../styles/infrastructure.css"; 
// import schoolBg from "../assets/school-bg.jpg"; 
import tick_infra from "../assets/Vector.svg";
import facility_transport from '../assets/transport.svg'
import facility_music from "../assets/music-icon.svg";
import facility_computer from "../assets/computer.svg";
import facility_lab from "../assets/lab.svg";
import facility_library from "../assets/book.svg";
const Infrastructure = () => {
  return (
    <section id="facility">
    <div className="infra-facilities-container">
      
      {/* Left Side: Our Infrastructure */}
      <div className="infrastructure-section">
        <h1 className="section-title-i">OUR &nbsp;<span className="head-color-infra"> INFRASTRUCTURE </span></h1>
        <h3 className="sec-head-infra">Huge infrastructure with vibrant atmosphere.</h3>
        <div className="infra-content">
        <p className="infra-description">
           School infrastructure, its design, quality, and day-to-day 
          management is significant in enabling school system to deliver improved education outcomes. It broadly 
          encompasses land and building, quality of facilities, and overall design.
        </p>
        <ul className="infra-list">
          <p><img src={tick_infra} alt="right-tick" />Learning program with after-school</p>
          <p><img src={tick_infra} alt="right-tick" />Opportunities to scientific experiments</p>
          <p><img src={tick_infra} alt="right-tick" />Positive learning environment</p>
          <p><img src={tick_infra} alt="right-tick" />Learning through play</p>
          <p><img src={tick_infra} alt="right-tick" />Individual attention in small classes</p>
        </ul>
      </div>
      </div>
      {/* Right Side: Our Facilities */}
      <div className="facilities-section">
        <h2 className="section-title-f">OUR FACILITIES</h2>
        <div className="facility-item">
          <div className="facility-image">
            <img src={facility_transport} alt="Facility" />
          </div>
          <div className="facility-content">
            <h3 className="facility-title">TRANSPORT FACILITY</h3>
            <p className="facility-description">
            Students can avail transport subject to the availability of seats .            </p>
          </div>
        </div>
        {/* F2 */}
        <div className="facility-item">
          <div className="facility-image">
            <img src={facility_music} alt="Facility" />
          </div>
          <div className="facility-content">
            <h3 className="facility-title">MUSIC ROOM FACILITY</h3>
            <p className="facility-description">
            The music room is sound proof and there is a separate
            resonance resistance practice room adjacent to the main room.      </p>    
            </div>
        </div>
        {/* F3 */}
        <div className="facility-item">
          <div className="facility-image">
            <img src={facility_computer} alt="Facility" />
          </div>
          <div className="facility-content">
            <h3 className="facility-title">COMPUTER LAB</h3>
            <p className="facility-description">
            Computer Lab with Dedicated Internet Connection is open to
            students </p>
          </div> 
        </div>
        {/* F4 */}
        <div className="facility-item">
          <div className="facility-image">
            <img src={facility_lab} alt="Facility" />
          </div>
          <div className="facility-content">
            <h3 className="facility-title">LAB FACILITY</h3>
            <p className="facility-description">
            Each of our science subjects has a separate laboratory
            </p>
          </div>
        </div>
        {/* F5 */}
        <div className="facility-item">
          <div className="facility-image">
            <img src={facility_library} alt="Facility" />
          </div>
          <div className="facility-content">
            <h3 className="facility-title">LIBRARY FACILITY</h3>
            <p className="facility-description">
            Our School’s library is well-equipped.
              </p>
          </div>
        </div>
      </div>

    </div>
    </section>
  );
};

export default Infrastructure;
