import { useState } from "react";

export default function SkillsHoverBox() {
  const [hoverSide, setHoverSide] = useState(null);

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

  const bubbleContainerStyle = (side) => `
    absolute top-[4rem] left-0 right-0 px-16
    flex flex-wrap gap-2 justify-center
    transition-opacity duration-300
    ${hoverSide === side ? "opacity-100" : "opacity-0 pointer-events-none"}
    max-w-full
  `;

  return (
    <div className="w-screen max-w-full mx-0 mt-4 rounded-lg overflow-hidden shadow-lg select-none flex transition-all duration-500 min-h-[20rem]">
      {/* Left - Professional */}
      <div
        onMouseEnter={() => setHoverSide("left")}
        onMouseLeave={() => setHoverSide(null)}
        className={`
                    ${sharedSideStyle}
                    bg-gradient-to-br from-gray-700 to-gray-900
                    ${
                      hoverSide === "left"
                        ? "flex-[3] scale-105 brightness-110 shadow-lg"
                        : "flex-1"
                    }
                `}
      >
        <h3 className="text-xl font-bold">Professional Skills</h3>
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
        className={`
                    ${sharedSideStyle}
                    bg-gradient-to-br from-gray-500 to-gray-700
                    ${
                      hoverSide === "right"
                        ? "flex-[3] scale-105 brightness-110 shadow-lg"
                        : "flex-1"
                    }
                `}
      >
        <h3 className="text-xl font-bold">Technical Skills</h3>
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
