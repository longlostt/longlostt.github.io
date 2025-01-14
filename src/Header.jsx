import React from "react";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";

export default function Header() {
  return (
    <header className="header">
      <div className="headerContent">
        <h1 className="title">
          Hi, I'm <span className="title-name">Georgy Bochnev</span>
        </h1>
        <p className="subtitle">Software Developer</p>
        <div className="contactLinks">
          <a href="mailto:bg2811777@gmail.com" className="iconLink">
            <CiMail size={26} />
          </a>
          <a href="https://www.linkedin.com/in/georgy-bochnev" target="_blank" rel="noopener noreferrer" className="iconLink">
            <FaLinkedin size={26} />
          </a>
          <a href="https://github.com/longlostt" target="_blank" rel="noopener noreferrer" className="iconLink">
            <LuGithub size={26} />
          </a>
        </div>
      </div>
    </header>
  );
}
