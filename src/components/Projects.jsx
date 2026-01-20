import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Tree assets
import leaf from "../assets/leaf2.svg";
import trunk from "../assets/trunk.svg";
import pot from "../assets/pot.svg";
import bush from "../assets/bush.svg";

// Casino images
import rviz from "../assets/casino/RViz.png";
import ui from "../assets/casino/UI.png";
import board from "../assets/casino/board.png";
import chipCV from "../assets/casino/chipCV.png";
import cupCV from "../assets/casino/cup_cv.png";
import diceCV from "../assets/casino/diceCV.png";
import gameBoard from "../assets/casino/game_board.jpg";
import setup from "../assets/casino/setup.jpg";

// Neural Net images
import preso from "../assets/neural/COMP9444_Clankas_Presentation.pdf";
import report from "../assets/neural/COMP9444 Project Report.pdf";
import notebook from "../assets/neural/notebook.png";

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
import manipulator2 from "../assets/manipulator/Puzzle.jpg";
import manipulator3 from "../assets/manipulator/ur5e-setup.jpg";

// State estimation
import state1 from "../assets/state/bias.png";

// Game images
import game1 from "../assets/game/award.png";

const projectsData = [
  {
    id: 1,
    title: "Autonomous ROS2 Dice-Playing Robot",
    year: 2025,
    description:
      "Developed a UR5e robot system capable of autonomously playing and managing a dice-based casino game. Implemented a multi-node ROS2 pipeline integrating computer vision, motion planning, and game logic for closed-loop operation. Designed a custom linear gripper using CAD and perception feedback to reliably handle dice in real time. Built a web dashboard and player database to track game state, player bets, and results. The project achieved high marks and was awarded 3rd Place for Best Project. Full implementation details are available in the GitHub repository.",
    media: [
      { type: "image", src: setup },
      { type: "video", videoId: "GC9QNMmfosw" },
      { type: "video", videoId: "r2lteD8BH_I" },
      { type: "image", src: gameBoard },
      { type: "image", src: chipCV },
      { type: "image", src: cupCV },
      { type: "image", src: diceCV },
      { type: "image", src: board },
      { type: "image", src: ui },
      { type: "image", src: rviz },
    ],
    github: "https://github.com/LachlanWallbri/casino_ur5_project",
    tools: [
      "ROS2",
      "Python",
      "C++",
      "Computer Vision",
      "State Machines",
      "Autonomous Navigation",
      "Closed Loop Control",
      "Motion Planning",
      "Web Dashboard",
      "Robotics",
      "Rviz",
    ],
  },
  {
    id: 2,
    title: "Argument Polarity Classification with Neural Networks",
    year: 2025,
    description:
      "Developed a neural network system to classify arguments in debates as supporting or opposing a claim. Designed models that incorporate debate context by representing the structure as a graph, allowing statements to be analyzed with surrounding context instead of in isolation. Trained and evaluated multiple network architectures to process large-scale text data efficiently, achieving high classification accuracy and outperforming baseline models on a real-world debate dataset. Full implementation and analysis are available in the accompanying Jupyter notebook.",
    media: [
      { type: "image", src: notebook },
      { type: "pdf", src: report },
      { type: "pdf", src: preso },
    ],
    github: "https://github.com/LachlanWallbri/clankasAMC",
    tools: [
      "Python",
      "PyTorch",
      "Neural Networks",
      "Machine Learning",
      "NLP",
      "Data Analysis",
      "Graph Modelling",
      "Model Evaluation",
      "Data Preprocessing",
    ],
  },

  // {
  //   id: 3,
  //   title: "Multiplayer Quiz Game Web App",
  //   year: 2025,
  //   description:
  //     "Frontend-focused web application developed for COMP6080, inspired by Kahoot-style live quizzes. Built an interactive multiplayer experience with real-time game flow, scoring, and responsive UI using modern web development practices.",
  //   media: [{ type: "image", src: website1 }],
  //   tools: ["JavaScript", "React", "HTML", "CSS", "Frontend Development"],
  // },
  {
    id: 4,
    title: "Capstone: Industrial Delivery Robot Reverse Engineering",
    year: 2024,
    description:
      "SCRUM-based team project to reverse engineer a retired food delivery robot for teleoperation and research. Developed a multithreaded backend control system, interfaced with LiDAR, cameras, CANBus and decompiled firmware. Implemented a react front end to display robot status, data and instructions.  Primary goals were completed in 65% of allotated time, allowing for the delivery of stretch goals such as ROS intergration and translation of C camera libraries.",
    media: [
      { type: "video", videoId: "zKGxhQgWT9w" },
      { type: "video", videoId: "pmc2IJWZwWY" },
      { type: "image", src: capstone1 },
      { type: "image", src: capstone2 },
    ],
    github: "https://github.com/LachlanWallbri/BellaBot",
    tools: [
      "Java",
      "Kotlin",
      "Android SDK",
      "Object-Oriented Programming",
      "TCP",
      "CANBus",
      "Git",
      "SCRUM",
      "ROS",
      "React",
      "Robotics",
    ],
  },
  {
    id: 5,
    title: "Personal Portfolio & Resume Website",
    year: 2025,
    description:
      "A portfolio website that shows off my personal projects and work experience, with smooth and interactive design elements to keep things engaging. It’s built using React for a flexible structure, Framer Motion to add animations, and TailwindCSS for easy and clean styling. The site works well on all devices and aims to be simple, clear, and easy to navigate.",
    media: [{ type: "image", src: website1 }],
    github: "https://github.com/LachlanWallbri/personal-website",
    tools: ["React", "TailwindCSS", "Framer Motion", "JavaScript", "Git"],
  },
  {
    id: 6,
    title: "Robot Manipulator Puzzle Solver",
    year: 2024,
    description:
      "Developed a robotics system featuring a 6-axis manipulator combined with computer vision to autonomously solve a color-based puzzle game. The robot uses a modified A* pathfinding algorithm to identify and manipulate colored blocks. Robust error handling addresses challenges such as block misalignment and external interference, ensuring reliable operation.",
    media: [
      { type: "image", src: manipulator1 },
      { type: "image", src: manipulator2 },
      { type: "image", src: manipulator3 },
    ],
    tools: [
      "MATLAB",
      "Computer Vision",
      "Heuristic AI",
      "Control Systems",
      "Ur5e",
      "Robotics",
      "Pathfinding Algorithms",
    ],
  },
  {
    id: 7,
    title: "ChromaCapture puzzle game",
    year: 2024,
    description:
      "Developed a puzzle game called ChromaCapture as part of my computer graphics course. The game features a 3D environment where players find and capture the environment as 2D pictures to solve puzzles in various levels. This was done as a group project, in which I was responsible for coding the photo capture mechanic, dialoge popups and the cyber city level (timestamp 7:20). 🏆This project also won the course's best project award!🏆",
    media: [
      { type: "video", videoId: "Ai4gvuiW0nc" },
      { type: "image", src: game1 },
    ], // Start at 2:49
    tools: [
      "Unreal Engine",
      "C++",
      "Computer Graphics",
      "Game Development",
      "Visual Programming",
    ],
  },
  {
    id: 8,
    title: "SLAM via Stochastic State Estimation",
    year: 2024,
    description:
      "Implemented robot localization in unknown environments using stochastic state estimation and sensor fusion. Employed a Kalman filter to accurately estimate the robot’s position and orientation in the presence of noisy LiDAR measurements and gyroscope bias.",
    media: [
      { type: "video", videoId: "GAMB-6VYB-k", start: 169 },
      { type: "image", src: state1 },
    ], // Start at 2:49
    tools: [
      "MATLAB",
      "Sensor Fusion",
      "Stochastic Estimation",
      "Simulation",
      "SLAM",
    ],
  },
  {
    id: 9,
    title: "ROS2 System Integration and Annotation",
    year: 2023,
    description:
      "Used ROS2 to integrate vision, navigation, and mapping systems to detect colored markers and annotate a robot-generated map. ROS2 was used to integrate multiple systems, including computer vision for color detection and SLAM for mapping. The robot autonomously navigated an environment, detecting colored markers and annotating the map with their locations.",
    media: [
      { type: "video", videoId: "637lcjfiW7U" },
      { type: "image", src: ros2project3 },
      { type: "image", src: ros2project4 },
      { type: "image", src: ros2project1 },
      { type: "image", src: ros2project2 },
    ],
    tools: [
      "ROS2",
      "Computer Vision",
      "Color Detection",
      "SLAM",
      "Simulation",
      "Autonomous Navigation",
      "Robotics",
    ],
  },
  {
    id: 10,
    title: "Maze Mapping and Traversal Robot",
    year: 2023,
    description:
      "Designed and programmed an autonomous robot capable of mapping and solving mazes using SLAM and heuristic pathfinding algorithms. Implemented a bird’s-eye computer vision system to validate the generated map for accuracy. The robot is built on an Arduino Mega platform with a Bluetooth interface for remote control and monitoring. It autonomously explores the maze, constructs a map of its environment, and determines the shortest path to the goal using heuristic pathfinding.",
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
      "Robotics",
    ],
  },
  {
    id: 11,
    title: "PLC-Based Multithreaded Robot System",
    year: 2024,
    description:
      "Developed a robust PLC control system featuring multithreading and a watchdog architecture to ensure reliable operation. Enabled remote control of the robot via an Xbox controller. Integrated with various motion systems and sensors, including GPS, LiDAR, encoders, and inertial measurement units for precise navigation and control.",
    media: [{ type: "video", videoId: "tHfo-cAUuUU" }],
    tools: [
      "PLC",
      "Multithreading",
      "GPS",
      "LiDAR",
      "Encoders",
      "Object-Oriented Design",
      "Watchdog Architecture",
      "Robotics",
    ],
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
        ) : current.type === "video" ? (
          <iframe
            src={`https://www.youtube.com/embed/${current.videoId}?mute=1${
              current.start ? `&start=${current.start}` : ""
            }`}
            title={`${title} demo video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : current.type === "pdf" ? (
          <iframe
            src={current.src}
            title={`${title} PDF`}
            className="w-full h-full"
          />
        ) : null}

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

      {/* Description */}
      {Array.isArray(description) ? (
        <ul className="text-gray-700 flex-grow list-disc pl-5 space-y-1 text-justify">
          {description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700 flex-grow text-justify">{description}</p>
      )}

      {/* 🧪 Tool Bubbles */}
      {tools?.length > 0 && (
        <div className="flex justify-center mt-5">
          <div className="flex flex-wrap gap-2 justify-center">
            {tools.map((tool, i) => (
              <span
                key={i}
                className="
                  px-3 py-1 text-sm 
                  rounded-full 
                  bg-gradient-to-br from-[#F88F1D] to-[#C72C48]
                  text-white
                  font-semibold
                  shadow-md
                  transition duration-300 ease-in-out
                  hover:from-[#FFB347] hover:to-[#E03E52]
                  hover:shadow-lg
                "
              >
                {tool}
              </span>
            ))}
          </div>
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
