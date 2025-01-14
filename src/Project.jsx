import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { GoDot } from "react-icons/go";

export default function Project({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % project.image.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + project.image.length) % project.image.length
    );
  };

  return (
    <div className="card">
      <div className="imageGallery">
        {project.image.length > 1 && (
          <button onClick={prevImage} className="arrow leftArrow">
            <IoIosArrowBack />
          </button>
        )}
        <img
          src={project.image[currentIndex]}
          alt={`${project.title} - ${currentIndex + 1}`}
          className="cardImage"
        />
        {project.image.length > 1 && (
          <button onClick={nextImage} className="arrow rightArrow">
            <IoIosArrowForward />
          </button>
        )}
      </div>
      <div className="cardContent">
        <h3 className="cardTitle">{project.title}</h3>
        <p className="cardDescription">{project.description}</p>
        <p className="cardTech">
          Technologies: {project.technologies.join(", ")}
        </p>
        <ul className="featureList">
          {project.features.map((feature, index) => (
            <li key={index} className="featureItem">
              <GoDot style={{ margin: '0 3px 0 -3px' }} /> {feature.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
