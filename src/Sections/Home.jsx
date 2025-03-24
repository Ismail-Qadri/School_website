import React, { memo } from "react";
import "../styles/homepage.css";
import home_poster_1 from "../assets/home-poster-1.jpg";

const Home = memo(() => {
  return (
    <section id="home">
    <div className="home-container">
    <div className="homepage-home">
    <img src={home_poster_1} alt="Home-poster-1" className="img-poster-1" />
     </div>
     </div>
     </section>
  );
});

export default Home;
