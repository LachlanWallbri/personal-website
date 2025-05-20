import { useState } from "react";

export default function SkillsHoverBox() {
  const [hoverSide, setHoverSide] = useState(null);

  return (
    <div className="w-screen max-w-full mx-0 mt-4 rounded-lg overflow-hidden shadow-lg select-none flex transition-all duration-500">
      {/* Left side - Professional */}
      <div
        onMouseEnter={() => setHoverSide("left")}
        onMouseLeave={() => setHoverSide(null)}
        className={`
                    flex-1 flex flex-col items-center
                    bg-gradient-to-br from-gray-700 to-gray-900
                    text-white font-semibold text-lg
                    transition-all duration-500 cursor-pointer
                    ${
                      hoverSide === "left"
                        ? "flex-[3] scale-105 brightness-110 shadow-lg"
                        : "flex-1"
                    }
                    px-6 py-8
                `}
      >
        <h3 className="mb-3 text-xl font-bold">Professional Skills</h3>
        <ul
          className={`space-y-1 text-sm max-w-sm transition-opacity duration-300 ${
            hoverSide === "left"
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <li>Effective Time Management</li>
          <li>Leadership & Teamwork</li>
          <li>Strong Communication Skills</li>
          <li>Project Management</li>
          <li>Problem Solving</li>
          <li>Agile & Scrum Methodologies</li>
        </ul>
      </div>

      {/* Right side - Technical */}
      <div
        onMouseEnter={() => setHoverSide("right")}
        onMouseLeave={() => setHoverSide(null)}
        className={`
                    flex-1 flex flex-col items-center
                    bg-gradient-to-br from-gray-500 to-gray-700
                    text-white font-semibold text-lg
                    transition-all duration-500 cursor-pointer
                    ${
                      hoverSide === "right"
                        ? "flex-[3] scale-105 brightness-110 shadow-lg"
                        : "flex-1"
                    }
                    px-6 py-8
                `}
      >
        <h3 className="mb-3 text-xl font-bold">Technical Skills</h3>
        <ul
          className={`space-y-1 text-sm max-w-sm transition-opacity duration-300 ${
            hoverSide === "right"
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <li>C, C++, Java, Python, MATLAB, Shell</li>
          <li>Frontend: HTML, CSS, JS, React</li>
          <li>ROS2 & OpenCV for Robotics/Vision</li>
          <li>Microcontrollers: Arduino, ESP32, RPi</li>
          <li>FPGA: Moku:Go, Control Systems</li>
          <li>CAD & Additive/Subtractive Manufacturing</li>
          <li>App Dev: Kotlin/Java for Android</li>
          <li>Networking (Terrestrial/Space)</li>
          <li>Cloud Infra: AWS & Pulumi</li>
          <li>PLC & Motion Control (GALIL RIO)</li>
        </ul>
      </div>
    </div>
  );
}
