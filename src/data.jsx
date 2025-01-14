import mobilePad1 from "./assets/MobilePad1.jpg";
import mobilePad2 from "./assets/MobilePad2.jpg";
import portfolio from "./assets/portfolio.jpg";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

export const skills = [
  { title: "HTML", image: <FaHtml5 size={80} /> },
  { title: "CSS", image: <FaCss3Alt size={80} /> },
  { title: "JavaScript", image: <IoLogoJavascript size={80} /> },
  { title: "Node.js", image: <FaNodeJs size={80} /> },
  { title: "ExpressJS", image: <SiExpress size={80} /> },
  { title: "MongoDB", image: <DiMongodb size={80} /> },
  { title: "React.js", image: <FaReact size={80} /> },
  { title: "BootStrap", image: <FaBootstrap size={80} /> },
  { title: "TailWind CSS", image: <SiTailwindcss size={80} /> },
];

export const projects = [
  {
    id: 1,
    title: "Mobile Pad",
    image: [mobilePad1, mobilePad2],
    technologies: ["Node.js", "MongoDB", "Express", "JavaScript", "HTML/CSS"],
    description: "Mobile Calling Web App.",
    github: "https://github.com/longlostt/mobilePad",
    features: [
      { text: "User Authentication" },
      { text: "Data Management" },
      { text: "RESTful APIs" },
    ],
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    image: [portfolio],
    technologies: ["HTML/CSS", "JavaScript", "React.js", "Vite"],
    description: "A portfolio website to showcase my projects and skills",
    github: "https://github.com/longlostt/portfolio",
    features: [
      { text: "Responsive Web Design" },
      { text: "SEO Optimized" },
      { text: "Accessible" },
    ],
  },
];
