import React from "react";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";

export default function Header() {
  return (
    <header className="header">
      <div className="headerContent">
        <h1 className="intro">
          Hi, I'm <span className="name">Georgy Bochnev</span>
        </h1>
        <p className="prof">Full Stack Software Developer</p>
        <div className="contactLinks">
          <a href="mailto:bg2811777@gmail.com" className="icon">
            <CiMail size={26} />
          </a>
          <a href="https://www.linkedin.com/in/georgy-bochnev" target="_blank" rel="noopener noreferrer" className="icon">
            <FaLinkedin size={26} />
          </a>
          <a href="https://github.com/longlostt" target="_blank" rel="noopener noreferrer" className="icon">
            <LuGithub size={26} />
          </a>
        </div>
      </div>
    </header>
  );
}
