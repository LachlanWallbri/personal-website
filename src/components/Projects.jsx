import { useState } from "react";
import { FaGithub } from "react-icons/fa";

import leaf from "../assets/leaf2.svg";
import trunk from "../assets/trunk.svg";
import pot from "../assets/pot.svg";
import bush from "../assets/bush.svg";

import lachlan from "../assets/Lachlan.png";

const projectsData = [
  {
    id: 1,
    title: "Project Alpha",
    year: 2023,
    description: "A web app that does amazing things.",
    media: [
      { type: "image", src: lachlan },
      { type: "image", src: "../assets/Lachlan.png" },
      { type: "image", src: "/images/alpha3.png" },
    ],
    github: "https://github.com/yourusername/project-alpha",
  },
  {
    id: 2,
    title: "Project Beta",
    year: 2022,
    description: "Mobile app focused on user experience.",
    media: [
      { type: "image", src: "/images/beta1.png" },
      { type: "image", src: "/images/beta2.png" },
    ],
  },
  {
    id: 3,
    title: "Project Gamma",
    year: 2024,
    description: "Exciting project with an embedded demo video.",
    media: [
      { type: "image", src: "/images/gamma1.png" },
      { type: "video", videoId: "dQw4w9WgXcQ" },
      { type: "image", src: "/images/gamma2.png" },
    ],
    github: "https://github.com/yourusername/project-gamma",
  },
];

export default function Projects() {
  return (
    <div>
      <div className="flex flex-col max-w-7xl mx-auto px-4 pb-0">
        {/* Bush */}
        <img
          src={bush}
          alt="Tree-top"
          className="w-[250px] object-contain mb-[-45px] mx-auto"
        />

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
                  <div className="w-10 h-1 bg-green-700" />
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

                <ProjectCard {...rest} />
              </div>
            </div>

            {/* Trunk (only between projects) */}
            <img
              src={trunk}
              alt="Trunk"
              className="h-[100px] object-contain z-5"
            />
          </div>
        ))}
        {/* Pot */}
        <img
          src={pot}
          alt="Potplant"
          className="w-[150px] object-contain mt-[-72px] mx-auto"
        />
      </div>
    </div>
  );
}

function ProjectCard({ title, year, description, media = [], github }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevMedia = () => {
    setCurrentIndex((i) => (i === 0 ? media.length - 1 : i - 1));
  };
  const nextMedia = () => {
    setCurrentIndex((i) => (i === media.length - 1 ? 0 : i + 1));
  };

  const current = media[currentIndex];

  return (
    <div className="bg-[#fdfdfd] rounded-lg shadow p-6 flex flex-col">
      <div className="relative aspect-video w-full rounded-md overflow-hidden bg-[#fdfdfd]">
        {current.type === "image" ? (
          <img
            src={current.src}
            alt={`${title} media ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${current.videoId}`}
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
