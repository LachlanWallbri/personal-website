import { useState } from "react";

import thesisImg1 from "../assets/thesis/testing.png";
import thesisImg2 from "../assets/thesis/beach.png";
import thesisImg3 from "../assets/thesis/plot.png";
import thesisImg4 from "../assets/thesis/park.png";
import thesisImg5 from "../assets/thesis/info.png";

import thesisPdf from "../assets/thesis/z5359327_thesisC_final.pdf";
import thesisPreso from "../assets/thesis/ThesisCpresentation.pdf";

import { FaGithub } from "react-icons/fa";

const Thesis = () => {
  const media = [
    // examples, replace with your real assets
    { type: "image", src: thesisImg5 },
    { type: "video", videoId: "-1qQ1UCmjzM" },
    { type: "image", src: thesisImg1 },
    { type: "image", src: thesisImg2 },
    { type: "image", src: thesisImg4 },
    { type: "image", src: thesisImg3 },
  ];

  const tools = [
    "UAV Networks",
    "Wi-Fi HaLow",
    "Mesh Networking",
    "NSGA-II",
    "Signal Propagation",
    "Search and Rescue",
    "Python",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const current = media[currentIndex];

  const prevMedia = () => {
    setCurrentIndex((i) => (i === 0 ? media.length - 1 : i - 1));
  };

  const nextMedia = () => {
    setCurrentIndex((i) => (i === media.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="bg-[#f5f9ff] rounded-lg shadow p-6 max-w-5xl mx-auto">
      {/* Media frame */}
      <div className="relative aspect-video w-full rounded-md overflow-hidden bg-gray-900 mb-6">
        {current.type === "image" ? (
          <img
            src={current.src}
            alt={`Thesis media ${currentIndex + 1}`}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${current.videoId}?mute=1`}
            title="Thesis demo video"
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

      {/* Text content */}
      <h3 className="text-2xl font-bold">
        Multi-UAV Mesh Networks for Search and Rescue
      </h3>
      <p className="text-sm text-gray-500 mb-4">Honours Thesis · 2025</p>

      <p className="text-gray-700 text-justify mb-4">
        My honours thesis investigates the use of cooperative UAV networks to
        provide resilient communications for search and rescue operations in
        challenging terrain. The work focuses on mesh-based networking using
        Wi-Fi HaLow, with UAVs acting as airborne routers for ground personnel.
      </p>

      <p className="text-gray-700 text-justify mb-4">
        The project combines radio propagation modelling, line-of-sight and
        foliage-aware signal analysis, and multi-objective optimisation to
        determine effective UAV placements. A custom NSGA-II optimiser evaluates
        coverage, throughput, and network robustness across end-to-end
        communication paths.
      </p>

      {/* Tool bubbles */}
      <div className="flex justify-center mt-6">
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

      {/* Thesis Presentation */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold">Thesis Presentation Slides</h3>

        <p className="text-sm text-gray-500 mb-4">Honours Thesis · 2025</p>

        <div className="w-full h-[600px] rounded-lg overflow-hidden shadow border bg-white">
          <iframe
            src={thesisPreso}
            title="Honours Thesis PDF"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Thesis PDF */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold">Full Thesis Report</h3>

        <p className="text-sm text-gray-500 mb-4">Honours Thesis · 2025</p>

        <div className="w-full h-[600px] rounded-lg overflow-hidden shadow border bg-white">
          <iframe
            src={thesisPdf}
            title="Honours Thesis PDF"
            className="w-full h-full"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a
            href={thesisPdf}
            download
            className="px-6 py-3 bg-gradient-to-r from-[#F88F1D] to-[#C72C48] text-white font-semibold rounded-full shadow-md transition hover:from-[#FFB347] hover:to-[#E03E52] hover:shadow-lg"
          >
            Download Thesis (PDF)
          </a>

          <a
            href="https://github.com/LachlanWallbri/your-thesis-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition"
          >
            <FaGithub />
            <span>View Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Thesis;
