import React from "react";
import "../styles/messages.css";
import principal_img from "../assets/principal-img.jpg";
import manager_img from "../assets/manager-msg.png";

const ITI_messages = () => {
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
                FOUNDER’S <span className="red-text">MESSAGE</span>
              </h2>
              <p className="message-text-p">
                Indian society has entered the 21st century today, in the
                present era the aim of education is not just to acquire
                education, but along with education, knowledge of technology has
                also become very important. Today the whole world is connected
                and new technologies are being developed one after the other. In
                the present era, if the student does not keep himself aware of
                vocational education and technology, then he will deprive
                himself of future plans. The aim of Rajkumari Prabha Rawat
                Industrial Training Institute is to equip students of every
                section of the society with advanced technology and to lead them
                towards making their future and to make their future by keeping
                them away from unemployment by providing employment in the
                leading institutions of their region and country. There is no
                lack of talent here, but due to lack of resources, students are
                not able to move forward. To solve these problems, this
                institute has been established so that there is no lack of any
                kind of resources in making the future of the students and they
                can make their future. President (Rajdev Yadav)
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
                  MANAGER’S <span className="red-text">MESSAGE</span>
                </h2>
                <p className="message-text-m">
                  According to Swami Vivekananda, "Arise, awake, and stop not
                  till the goal is reached." If students engrave this statement
                  in their minds, they will never stray from their goal. Today,
                  the biggest problem in India is unemployment. This
                  unemployment is pushing the future of many young people
                  towards darkness. The only solution to this problem is that in
                  this era of industrial revolution, they should equip
                  themselves with technology and build their future. Today,
                  competition is at its peak in every field of life, and at the
                  same time, the commercialization of education has greatly
                  degraded educational values and beliefs at all levels. In such
                  a situation, today, every parent has only one concern
                  regarding their children: what kind of education should they
                  give their children so that they can become self-reliant and
                  their children's development can progress continuously.
                  Manager (Mrs. Kanti Devi)
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
export default ITI_messages;
