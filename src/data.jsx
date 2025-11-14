import mobilePad1 from "./assets/MobilePad1.jpg";
import mobilePad2 from "./assets/MobilePad2.jpg";
import portfolio from "./assets/portfolio.jpg";
import skinalyze from "./assets/skinalyze.png"

import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaBootstrap, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";


export const frontendSkills = [
  { title: "HTML", image: <FaHtml5 size={80} /> },
  { title: "CSS", image: <FaCss3Alt size={80} /> },
  { title: "JavaScript", image: <IoLogoJavascript size={80} /> },
  { title: "React.js", image: <FaReact size={80} /> },
  { title: "BootStrap", image: <FaBootstrap size={80} /> },
];

export const backendSkills = [
  { title: "Node.js", image: <FaNodeJs size={80} /> },
  { title: "ExpressJS", image: <SiExpress size={80} /> },
  { title: "MongoDB", image: <DiMongodb size={80} /> },
  { title: "Python", image: <FaPython size={80} /> },
];

export const projects = [
  {
    id: 1,
    title: "VoIP Softphone App",
    link: 'https://github.com/longlostt/mobilePad',
    image: [mobilePad1, mobilePad2],
    technologies: ["Twilio SDK", "Node.js", "Express.js", "MongoDB"],
    description: "An in-browser soft-phone app built with Node.js, Express, and Twilio for making real-time calls, managing contacts, and interacting through a mobile-style dial pad interface.",
    features: [
      { text: "User Authentication" },
      { text: "Data Management" },
      { text: "RESTful APIs" },
    ],
  },  
  {
    id: 2,
    title: '"Skinalyze" - AI-powered skin analysis',
    link: 'https://github.com/longlostt/Skinalyze',
    image: [skinalyze],
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "Gemini", "Google Maps API", "Python", "OpenCV"],
    description: "An AI-powered web app that analyzes user images in real time, detects skin conditions with a fine-tuned vision model, and delivers personalized, location-aware care insights.",
    features: [
      { text: "AI-Powered Imaging" },
      { text: "Location-Based Insights" },
      { text: "Instant Diagnosis" },
    ],
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    image: [portfolio],
    technologies: ["HTML/CSS", "JavaScript", "React.js", "Vite"],
    description: "A portfolio website to showcase my projects and skills",
    features: [
      { text: "Responsive Web Design" },
      { text: "SEO Optimized" },
      { text: "Accessible" },
    ],
  }
];


