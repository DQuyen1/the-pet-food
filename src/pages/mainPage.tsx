import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import "../assets/css/MainPage.css";
import slide1 from "../assets/images/image (4).png";
import slide2 from "../assets/images/image (6).png";
import slide3 from "../assets/images/pet5.png"; // Assuming you want to style it in a separate CSS file

// Sample images (replace these with your actual image URLs)
const images = [slide1, slide2, slide3];

export default function MainPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image"
        />
        <button className="slider-button left-button" onClick={handlePrev}>
          <BsFillArrowLeftCircleFill fontSize={30} />
        </button>
        <button className="slider-button right-button" onClick={handleNext}>
          <BsFillArrowRightCircleFill fontSize={30} />
        </button>
      </div>
    </div>
  );
}
