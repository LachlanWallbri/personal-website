import { useState } from "react";
import { FaGithub } from "react-icons/fa";

// Tree assets
import leaf from "../assets/leaf2.svg";
import trunk from "../assets/trunk.svg";
import pot from "../assets/pot.svg";
import bush from "../assets/bush.svg";

// Capstone images
import capstone1 from "../assets/capstone/graph.jpg";
import capstone2 from "../assets/capstone/stats.jpg";

// Website images
import website1 from "../assets/website/Skills.png";

// ROS2 project image
import ros2project1 from "../assets/ros2/CV pucks.png";
import ros2project2 from "../assets/ros2/CV pucks2.png";
import ros2project3 from "../assets/ros2/mapping.PNG";
import ros2project4 from "../assets/ros2/puck.JPEG";

// robo arm
import manipulator1 from "../assets/manipulator/robotarm.png";

// State estimation
import state1 from "../assets/state/bias.png";

const projectsData = [
  {
    id: 1,
    title: "Capstone: Industrial Delivery Robot Reverse Engineering",
    year: 2024,
    description:
      "SCRUM-based team project to reverse engineer a Pudutech Bellabot with closed-source software for teleoperation and research. Developed a multithreaded backend control system, interfaced with LiDAR, cameras, CANBus and decompiled firmware, and delivered stretch goals ahead of schedule.",
    media: [
      { type: "video", videoId: "zKGxhQgWT9w" },
      { type: "video", videoId: "pmc2IJWZwWY" },
      { type: "image", src: capstone1 },
      { type: "image", src: capstone2 },
    ],
    github: "https://github.com/LachlanWallbri/BellaBot",
    tools: [
      "Java",
      "Android SDK",
      "Object-Oriented Programming",
      "TCP",
      "CANBus",
      "Git",
      "SCRUM",
    ],
  },
  {
    id: 2,
    title: "Personal Portfolio & Resume Website",
    year: 2025,
    description:
      "A dynamic portfolio website showcasing personal projects, professional experience, and interactive UI/UX elements built with React, Framer Motion, and TailwindCSS.",
    media: [{ type: "image", src: website1 }],
    github: "https://github.com/LachlanWallbri/personal-website",
    tools: ["React", "TailwindCSS", "Framer Motion", "JavaScript", "Git"],
  },
  {
    id: 3,
    title: "Robot Manipulator Puzzle Solver",
    year: 2024,
    description:
      "A robotics project using a 6-axis manipulator and computer vision to autonomously solve a color puzzle game board with error handling and robustness.",
    media: [{ type: "image", src: manipulator1 }],
    tools: ["MATLAB", "Computer Vision", "Heuristic AI", "Control Systems"],
  },
  {
    id: 4,
    title: "SLAM via Stochastic State Estimation",
    year: 2024,
    description:
      "Simulated localization of a robot using stochastic state estimation techniques and sensor fusion to navigate unknown environments.",
    media: [
      { type: "video", videoId: "GAMB-6VYB-k", start: 169 },
      { type: "image", src: state1 },
    ], // Start at 2:49
    tools: ["MATLAB", "Sensor Fusion", "Stochastic Estimation", "Simulation"],
  },
  {
    id: 5,
    title: "ROS2 System Integration and Annotation",
    year: 2023,
    description:
      "Used ROS2 to integrate vision, navigation, and mapping systems to detect colored markers and annotate a robot-generated map.",
    media: [
      { type: "video", videoId: "637lcjfiW7U" },
      { type: "image", src: ros2project3 },
      { type: "image", src: ros2project4 },
      { type: "image", src: ros2project1 },
      { type: "image", src: ros2project2 },
    ],
    tools: ["ROS2", "Computer Vision", "Color Detection", "SLAM"],
  },
  {
    id: 6,
    title: "Maze Mapping and Traversal Robot",
    year: 2023,
    description:
      "Designed and programmed a robot to map and solve a maze using vision-based SLAM and heuristic pathfinding. Built the chassis in CAD and implemented localization with Arduino sensors.",
    media: [
      { type: "video", videoId: "fO4dUvNimfs" },
      { type: "Video", videoId: "NJ17OA670b8" },
      { type: "video", videoId: "SBM2KD9x6Qs" },
    ],
    tools: [
      "Arduino Mega",
      "Computer Vision",
      "SLAM",
      "CAD",
      "Pathfinding Algorithms",
    ],
  },
  {
    id: 7,
    title: "PLC-Based Multithreaded Robot System",
    year: 2024,
    description:
      "Developed a robust PLC control system with multithreading and watchdog architecture. Interfaced with motion systems and sensors including GPS, LiDAR, encoders, and inertial sensors.",
    media: [{ type: "video", videoId: "tHfo-cAUuUU" }],
    tools: ["PLC", "Multithreading", "GPS", "LiDAR", "Encoders", "OO Design"],
  },
];

export default function Projects() {
  return (
    <div>
      <div className="flex flex-col max-w-7xl mx-auto px-4 pb-0">
        {/* Bush */}
        {/* <img
          src={bush}
          alt="Tree-top"
          className="w-[850px] object-contain mb-[-600px] mx-auto"
        /> */}

        {projectsData.map(({ id, ...rest }, index) => (
          <div key={id} className="flex flex-col items-center w-full">
            <div
              className={`w-full flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="relative w-full sm:w-2/3">
                {/* horizontal branch line with leaf */}
                <div
                  className={`hidden sm:flex items-center absolute -top-2 h-1 ${
                    index % 2 === 0
                      ? "right-full flex-row-reverse -mr-6"
                      : "left-full -ml-6"
                  }`}
                >
                  <div className="w-10 h-1 bg-green-700 overflow-hidden" />
                  <img
                    src={leaf}
                    alt="Leaf"
                    className={`w-20 h-20 ml-2 mr-2 animate-breeze ${
                      index % 2 !== 0
                        ? "rotate-[40deg]"
                        : "-rotate-[40deg] -scale-x-100"
                    }`}
                  />
                </div>

                {/* 👇 Pass 'tools' to ProjectCard */}
                <ProjectCard {...rest} />
              </div>
            </div>

            {/* Trunk */}
            <img
              src={trunk}
              alt="Trunk"
              className="h-[100px] object-contain z-5"
              style={{
                transform: index % 2 === 0 ? "rotate(0deg)" : "scaleX(-1)",
              }}
            />
          </div>
        ))}
        {/* Pot */}
        {/* <img
          src={pot}
          alt="Potplant"
          className="w-[150px] object-contain mt-[-72px] mx-auto"
        /> */}
      </div>
    </div>
  );
}

function ProjectCard({ title, year, description, media = [], github, tools }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevMedia = () => {
    setCurrentIndex((i) => (i === 0 ? media.length - 1 : i - 1));
  };
  const nextMedia = () => {
    setCurrentIndex((i) => (i === media.length - 1 ? 0 : i + 1));
  };

  const current = media[currentIndex];

  return (
    <div className="bg-[#f5f9ff] rounded-lg shadow p-6 flex flex-col">
      <div className="relative aspect-video w-full rounded-md overflow-hidden bg-gray-900">
        {current.type === "image" ? (
          <img
            src={current.src}
            alt={`${title} media ${currentIndex + 1}`}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${current.videoId}?mute=1${
              current.start ? `&start=${current.start}` : ""
            }`}
            title={`${title} demo video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        )}

        {media.length > 1 && (
          <>
            <button
              onClick={prevMedia}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full px-2 py-1 hover:bg-opacity-70"
              aria-label="Previous media"
              type="button"
            >
              ‹
            </button>
            <button
              onClick={nextMedia}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full px-2 py-1 hover:bg-opacity-70"
              aria-label="Next media"
              type="button"
            >
              ›
            </button>
          </>
        )}
      </div>

      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{year}</p>
      <p className="text-gray-700 flex-grow">{description}</p>

      {/* 🧪 Tool Bubbles */}
      {tools?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {tools.map((tool, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-full bg-gradient-to-br from-green-200 to-green-400 text-green-900 font-medium shadow-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      )}

      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800"
        >
          <FaGithub />
          <span>GitHub Repo</span>
        </a>
      )}
    </div>
  );
}
