import React, { useState } from "react"; // ✅ Import useState
import "../styles/gallery.css"; // Add styles for layout

// Import your images
import img1 from "../assets/gallery/g1.jpeg";
import img2 from "../assets/gallery/g2.jpeg";
import img3 from "../assets/gallery/g3.jpeg";
import img4 from "../assets/gallery/g4.jpeg";
import img5 from "../assets/gallery/g5.jpeg";
import img6 from "../assets/gallery/g6.jpeg";
import img7 from "../assets/gallery/g7.jpeg";
import img8 from "../assets/gallery/g8.jpeg";
import img9 from "../assets/gallery/g9.jpeg";
// import img10 from "../assets/gallery/g10.jpeg";
import img11 from "../assets/gallery/g11.jpeg";
import img12 from "../assets/gallery/g12.jpeg";
import img13 from "../assets/gallery/g13.jpeg";
import img14 from "../assets/gallery/g14.jpeg";
import img15 from "../assets/gallery/g15.jpeg";
import img16 from "../assets/gallery/g16.jpeg";
import img17 from "../assets/gallery/g17.jpeg";
import img18 from "../assets/gallery/g18.jpeg";
import img19 from "../assets/gallery/g19.jpeg";
import img20 from "../assets/gallery/g20.jpeg";
import img21 from "../assets/gallery/g21.jpeg";
import img22 from "../assets/gallery/g22.jpeg";
import img23 from "../assets/gallery/g23.jpeg";
import img24 from "../assets/gallery/g24.jpeg";
import img25 from "../assets/gallery/g25.jpeg";
import img26 from "../assets/gallery/g26.jpeg";
import img27 from "../assets/gallery/g27.jpeg";
import img28 from "../assets/gallery/g28.jpeg";
import img29 from "../assets/gallery/g29.jpeg";
import img30 from "../assets/gallery/g30.jpeg";


const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img22, img23, img24, img25, img26, img27, img28, img29,img30];
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-section">
      <h2 className="gallery-title">📸 Our Gallery</h2>
      <div className="gallery-container">
        {images.map((src, index) => (
          <div key={index} className="gallery-item" onClick={() => setSelectedImage(src)}>
            <img src={src} alt={`Gallery ${index + 1}`} className="gallery-image" />
            <div className="overlay">
              <span>View</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Popup */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Enlarged view" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
