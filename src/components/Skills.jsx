import { useState, useEffect } from "react";

import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGit,
  FaAws,
  FaLinux,
  FaDocker,
  FaCuttlefish, // for C
  FaRaspberryPi,
  FaAndroid,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiKotlin,
  SiOpencv,
  SiArduino,
  SiEspressif,
  SiPulumi,
  SiKubernetes,
  SiRos,
  SiCypress,
  SiDassaultsystemes,
} from "react-icons/si";
import { PiMathOperationsFill } from "react-icons/pi";
import { GiDeliveryDrone } from "react-icons/gi";

export default function SkillsHoverBox() {
  const [hoverSide, setHoverSide] = useState(null);
  const [showBubbles, setShowBubbles] = useState(null);

  const skillMap = {
    C: <FaCuttlefish className="text-blue-400" />,
    "C++": <SiCplusplus className="text-blue-400" />,
    Java: <FaJava className="text-red-600" />,
    Python: <FaPython className="text-yellow-400" />,
    MATLAB: <PiMathOperationsFill className="text-orange-400" />,
    Shell: <FaLinux className="text-white" />,
    ROS2: <SiRos className="text-pink-400" />,
    OpenCV: <SiOpencv className="text-blue-600" />,
    Android: <FaAndroid className="text-green-600" />,
    Kotlin: <SiKotlin className="text-purple-500" />,
    HTML: <FaHtml5 className="text-orange-500" />,
    CSS: <FaCss3Alt className="text-blue-500" />,
    JS: <FaJs className="text-yellow-400" />,
    ReactJS: <FaReact className="text-cyan-400" />,
    Arduino: <SiArduino className="text-blue-600" />,
    ESP32: <SiEspressif className="text-red-600" />,
    RPi: <FaRaspberryPi className="text-red-500" />,
    "Computer Networks": <FaNetworkWired className="text-cyan-500" />,
    Kubernetes: <SiKubernetes className="text-blue-500" />,
    Docker: <FaDocker className="text-blue-400" />,
    AWS: <FaAws className="text-orange-400" />,
    Pulumi: <SiPulumi className="text-purple-500" />,
    Git: <FaGit className="text-orange-500" />,
    "Computer Vision": <SiOpencv className="text-blue-500" />,
    Cypress: <SiCypress className="text-green-500" />,
    Solidworks: <SiDassaultsystemes className="text-red-500" />,
    "Control Systems": <GiDeliveryDrone />,
  };

  const tec_skills = [
    "C",
    "C++",
    "Java",
    "Python",
    "MATLAB",
    "Shell",
    "ROS2",
    "OpenCV",
    "Solidworks",
    "Android",
    "Kotlin",
    "HTML",
    "CSS",
    "JS",
    "ReactJS",
    "Cypress",
    "Arduino",
    "ESP32",
    "RPi",
    "Computer Networks",
    "Kubernetes",
    "Docker",
    "AWS",
    "Pulumi",
    "Git",
    "Control Systems",
  ];

  const pro_skills = [
    "Time Management",
    "Leadership",
    "Teamwork",
    "Communication",
    "Project Management",
    "Problem Solving",
    "Agile Methodologies",
    "Scrum",
    "Design Thinking",
    "Systems Engineering",
    "Technical Writing",
    "Research & Development",
  ];

  useEffect(() => {
    let fadeOutTimeout;
    let fadeInTimeout;

    if (hoverSide) {
      if (showBubbles && showBubbles !== hoverSide) {
        // Switching sides: fade out current bubbles first
        setShowBubbles(null);
        // Then fade in new bubbles after fade out
        fadeInTimeout = setTimeout(() => setShowBubbles(hoverSide), 350);
      } else {
        // Normal fade in on hover
        fadeInTimeout = setTimeout(() => setShowBubbles(hoverSide), 300);
      }
    } else {
      // Hover gone, fade out bubbles quickly
      setShowBubbles(null);
    }

    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(fadeInTimeout);
    };
  }, [hoverSide]);

  const bubbleContainerStyle = (side) => {
    const isVisible = showBubbles === side;

    return `
    absolute top-[4rem] left-0 right-0 px-16 mt-2
    flex flex-wrap gap-2 justify-center
    ${
      isVisible
        ? "opacity-100 transition-opacity duration-300"
        : "opacity-0 pointer-events-none transition-opacity duration-150"
    }
    max-w-full
  `;
  };

  const bubbleStyle = `
    text-xs sm:text-base px-3 py-1
    rounded-full bg-gray-900/40 text-white
    border border-white/20 backdrop-blur-md
    transition duration-200 
    hover:scale-105 hover:bg-[#f5f9ff]/20
  `;

  const sharedSideStyle = `
    flex-1 flex flex-col items-center justify-start relative
    text-white font-semibold text-lg
    px-6 py-8
    transition-all duration-500 cursor-pointer
  `;

  const InfoIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-28 h-28 mt-16 opacity-90"
    >
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <circle cx="12" cy="8" r="1" fill="white" />
    </svg>
  );

  const GearIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#1f749b"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-28 h-28 mt-16 opacity-90"
    >
      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" />
      <path
        d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
        stroke="white"
        strokeWidth="1"
        fill="white"
        fillOpacity="0"
      />
    </svg>
  );

  return (
    <div className="relative w-screen max-w-7xl mx-auto mx-0 mt-4 overflow-hidden select-none flex transition-all duration-500 min-h-[20rem]">
      {/* Left - Professional */}
      <div
        onMouseEnter={() => setHoverSide("left")}
        onMouseLeave={() => setHoverSide(null)}
        className={`group ${sharedSideStyle} ${
          hoverSide === "left"
            ? "flex-[3] scale-105 brightness-110 shadow-lg transition-all duration-500"
            : "flex-1 scale-100 transition-all duration-70"
        }`}
      >
        <h3 className="flex items-center gap-2 text-xl font-bold">
          Professional Skills
        </h3>

        <p className="text-xs text-gray-300 mt-1 italic opacity-80 group-hover:opacity-0 transition-opacity duration-300">
          Hover to reveal skills
        </p>

        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none
              transition-opacity duration-300
              ${hoverSide === "left" ? "opacity-0" : "opacity-70"}
              z-10
          `}
        >
          <InfoIcon />
        </div>

        <div className={bubbleContainerStyle("left")}>
          {pro_skills.map((skill) => (
            <div key={skill} className={bubbleStyle}>
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Right - Technical */}
      <div
        onMouseEnter={() => setHoverSide("right")}
        onMouseLeave={() => setHoverSide(null)}
        className={`group ${sharedSideStyle} ${
          hoverSide === "right"
            ? "flex-[3] scale-105 brightness-110 shadow-lg transition-all duration-500"
            : "flex-1 scale-100 transition-all duration-100"
        }`}
      >
        <h3 className="flex items-center gap-2 text-xl font-bold">
          Technical Skills
        </h3>
        <p className="text-xs text-gray-300 mt-1 italic opacity-70 group-hover:opacity-0 transition-opacity duration-300">
          Hover to reveal skills
        </p>

        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10
                        transition-opacity duration-300
                        ${hoverSide === "right" ? "opacity-0" : "opacity-70"}
                    `}
        >
          <GearIcon />
        </div>

        <div className={bubbleContainerStyle("right")}>
          {tec_skills.map((skill) => (
            <div
              key={skill}
              className={`${bubbleStyle} flex items-center space-x-1`}
            >
              <span>{skillMap[skill] ?? <span className="w-5" />}</span>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
