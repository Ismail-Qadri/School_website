// import React, { memo } from "react";
// import "../styles/homepage.css";
// import home_poster_1 from "../assets/home-poster-1.jpg";

// const Home = memo(() => {
//   return (
//     <section id="home">
//     <div className="home-container">
//     <div className="homepage-home">
//     <img src={home_poster_1} alt="Home-poster-1" className="img-poster-1" />
//      </div>
//      </div>
//      </section>
//   );
// });

// export default Home;



import React, { memo } from "react";
import Slider from "react-slick";
import "../styles/homepage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import poster images
import home_poster_1 from "../assets/college-poster-6.png";
import home_poster_2 from "../assets/college-poster-3.jpeg";
import home_poster_3 from "../assets/Purple Yellow Modern School Admission Banner.png";
import home_poster_4 from "../assets/college-poster-2.jpeg";
import home_poster_5 from "../assets/college-poster-7.png";

const Home = memo(() => {
  const settings = {
    dots: true,             // Show navigation dots
    infinite: true,         // Loop through slides
    speed: 500,            // Transition speed
    slidesToShow: 1,       // Show one slide at a time
    slidesToScroll: 1,     // Scroll one slide at a time
    autoplay: true,        // Enable auto-slide
    autoplaySpeed: 4000,   // Change slide every 3 seconds
    arrows: true,          // Show previous/next arrows
  };

  return (
    <section id="home">
      <div className="home-container">
        <Slider {...settings}>
          <div>
            <img src={home_poster_1} alt="Home Poster 1" className="carousel-img" />
          </div>
          <div>
            <img src={home_poster_2} alt="Home Poster 2" className="carousel-img" />
          </div>
          <div>
            <img src={home_poster_3} alt="Home Poster 3" className="carousel-img" />
          </div>
          <div>
            <img src={home_poster_4} alt="Home Poster 4" className="carousel-img" />
          </div>
          <div>
            <img src={home_poster_5} alt="Home Poster 5" className="carousel-img" />
          </div>
          
        </Slider>
      </div>
    </section>
  );
});

export default Home;
