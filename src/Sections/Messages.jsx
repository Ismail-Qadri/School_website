import React from "react";
import "../styles/messages.css";
import principal_img from "../assets/principal-img.jpg";
import manager_img from "../assets/director_pic.jpeg";

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
              <h2 className="message-heading-p">
                {" "}
                PRINCIPAL’S <span className="red-text">MESSAGE</span>
              </h2>
              <p className="message-text-p">
                Dear Students, "Good work, like good talk or any other form of
                worthwhile human relationship depends upon being able to assume
                an extended shared world." We at RRTians , keenly support the
                pivotal, proactive role that an educational organization plays
                in the holistic development of children. Children acquire skills
                and knowledge easily if they find the surroundings stimulating
                and purposeful As a dynamic and progressive educational
                institution, we provide collaborative, cooperative and
                supportive environment to foster innovation as well as support
                teaching practices which are not only stimulating and conducive
                for learning but also ensure that our students grow up into
                autonomous individuals with deep rooted value system.
                <br></br>May I wish them all the best
              </p>
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
                <h2 className="message-heading-m">
                  FOUNDER’S <span className="red-text">MESSAGE</span>
                </h2>
                <p className="message-text-m">
                  Ensure that you are on the right path and on the right
                  direction, rather than the speed towards goals. Success is
                  never a result of a day's work.This college is a boon for the
                  people who provide their children chance to study in this
                  esteemed college of ours where excellence guides the students.
                  I know only one thing that the students studying in his
                  institution shall reach the place where other can't even
                  dream. So I would like to say our students to go on neither
                  left, nor right but to the goal. With best wishes!!<br></br>
                  Gratification should be in small & satisfactory steps.
                </p>
                {/* <button className="read-more-btn-m">Read More</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
