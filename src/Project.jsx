import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { GoDot } from "react-icons/go";

export default function Project({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % project.image.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + project.image.length) % project.image.length);
  };

  return (
    <div className="proj">
      <div className="imageGallery">
        {project.image.length > 1 && (
          <button onClick={prevImage} className="arrow leftArrow">
            <IoIosArrowBack />
          </button>
        )}
        <img
          src={project.image[currentIndex]}
          alt={`${project.title} - ${currentIndex + 1}`}
          className="projImage"
        />
        {project.image.length > 1 && (
          <button onClick={nextImage} className="arrow rightArrow">
            <IoIosArrowForward />
          </button>
        )}
      </div>
      <div className="projContent">
        <h3 className="projTitle">
          {project.link ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className="projDescription">{project.description}</p>
        <p className="projTech">
          Technologies: {project.technologies.join(", ")}
        </p>
        <ul className="features">
          {project.features.map((feature, index) => (
            <li key={index} className="feature">
              <GoDot style={{ margin: '0 3px 0 -3px' }} /> {feature.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
