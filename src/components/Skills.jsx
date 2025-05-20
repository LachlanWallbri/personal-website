import { useState, useEffect } from "react";

import img from "../assets/react.svg";

export default function SkillsHoverBox() {
  const [hoverSide, setHoverSide] = useState(null);
  const [showBubbles, setShowBubbles] = useState(null);

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
    text-xs sm:text-sm px-3 py-1
    rounded-full bg-white/10 text-white
    border border-white/20 backdrop-blur
    transition duration-200
    hover:scale-105 hover:bg-white/20
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
      stroke="#1f749b"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-28 h-28 mt-16 opacity-90"
    >
      <circle cx="12" cy="12" r="10" stroke="#103557" strokeWidth="1.5" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <circle cx="12" cy="8" r="1" fill="#103557" />
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
      <circle cx="12" cy="12" r="3" stroke="#000816" strokeWidth="1.5" />
      <path
        d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
        stroke="#000816"
        strokeWidth="1"
        fill="#1f749b"
        fillOpacity="0.1"
      />
    </svg>
  );

  return (
    <div className="relative w-screen max-w-full mx-0 mt-4 overflow-hidden shadow-lg select-none flex transition-all duration-500 min-h-[20rem]">
      {/* Left - Professional */}
      <div
        onMouseEnter={() => setHoverSide("left")}
        onMouseLeave={() => setHoverSide(null)}
        className={`group ${sharedSideStyle} ${
          hoverSide === "left"
            ? "flex-[3] scale-105 brightness-110 shadow-lg transition-all duration-500"
            : "flex-1 scale-100 transition-all duration-70"
        }`}
        style={{
          background: "linear-gradient(135deg,rgb(20, 64, 104),rgb(0, 14, 37))",
        }}
      >
        <h3 className="flex items-center gap-2 text-xl font-bold">
          Professional Skills
        </h3>

        <p className="text-xs text-gray-300 mt-1 italic opacity-70 group-hover:opacity-0 transition-opacity duration-300">
          Hover to reveal skills
        </p>

        {/* Show image only if NOT hovered on left */}
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none
                      transition-opacity duration-300
                      ${hoverSide === "left" ? "opacity-0" : "opacity-30"}
                      z-10
                    `}
        >
          <InfoIcon />
        </div>

        <div className={bubbleContainerStyle("left")}>
          {[
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
          ].map((skill) => (
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
        style={{
          background: "linear-gradient(135deg, #1f749b, #103557)",
        }}
      >
        <h3 className="flex items-center gap-2 text-xl font-bold">
          Technical Skills
        </h3>
        <p className="text-xs text-gray-300 mt-1 italic opacity-70 group-hover:opacity-0 transition-opacity duration-300">
          Hover to reveal skills
        </p>

        {/* Show image only if NOT hovered on right */}
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10
                      transition-opacity duration-300
                      ${hoverSide === "right" ? "opacity-0" : "opacity-30"}
                    `}
        >
          <GearIcon />
        </div>

        <div className={bubbleContainerStyle("right")}>
          {[
            "C, C++, Java, Python",
            "MATLAB, Shell",
            "ROS2",
            "OpenCV",
            "CAD (Additive & Subtractive)",
            "Android App Dev (Kotlin & Java)",
            "HTML, CSS, JS",
            "ReactJS, Cypress",
            "FPGA (Moku:Go)",
            "Arduino, ESP32, RPi",
            "Computer Networks",
            "Kubernetes, Docker",
            "PLC (GALIL RIO)",
            "AWS, Pulumi",
            "Quadcopter Control Systems",
          ].map((skill) => (
            <div key={skill} className={bubbleStyle}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
