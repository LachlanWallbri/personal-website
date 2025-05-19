import { useState } from "react";

export default function SkillsHoverBox() {
  const [hoverSide, setHoverSide] = useState(null);

  return (
    <div className="max-w-4xl mx-auto mt-12 rounded-lg overflow-hidden shadow-lg select-none flex h-48">
      {/* Left side - Professional */}
      <div
        onMouseEnter={() => setHoverSide("left")}
        onMouseLeave={() => setHoverSide(null)}
        className={`
          flex-1 flex flex-col justify-center items-center
          bg-gradient-to-br from-purple-600 to-purple-400
          text-white font-semibold text-lg
          transition-all duration-500 cursor-pointer
          ${
            hoverSide === "left"
              ? "flex-[3] scale-105 brightness-110 shadow-lg"
              : "flex-1"
          }
          px-6
        `}
      >
        <h3 className="mb-3 text-xl font-bold">Professional Skills</h3>
        {hoverSide === "left" && (
          <ul className="space-y-1 text-sm max-w-xs">
            <li>Agile methodologies</li>
            <li>Team leadership</li>
            <li>Effective communication</li>
            <li>Project management</li>
          </ul>
        )}
      </div>

      {/* Right side - Technical */}
      <div
        onMouseEnter={() => setHoverSide("right")}
        onMouseLeave={() => setHoverSide(null)}
        className={`
          flex-1 flex flex-col justify-center items-center
          bg-gradient-to-br from-blue-600 to-blue-400
          text-white font-semibold text-lg
          transition-all duration-500 cursor-pointer
          ${
            hoverSide === "right"
              ? "flex-[3] scale-105 brightness-110 shadow-lg"
              : "flex-1"
          }
          px-6
        `}
      >
        <h3 className="mb-3 text-xl font-bold">Technical Skills</h3>
        {hoverSide === "right" && (
          <ul className="space-y-1 text-sm max-w-xs">
            <li>JavaScript / React</li>
            <li>Node.js / Express</li>
            <li>Tailwind CSS</li>
            <li>Database Management</li>
          </ul>
        )}
      </div>
    </div>
  );
}
