import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import lachlan from "../assets/Lachlan.png";

export default function About() {
  const birthDate = new Date(2002, 11, 9);
  const today = new Date();
  const age =
    today.getFullYear() -
    birthDate.getFullYear() -
    (today < new Date(today.getFullYear(), 11, 9) ? 1 : 0);

  return (
    <div className="bg-white rounded-lg shadow p-8 max-w-4xl mx-auto space-y-8">
      {/* Grid layout with fixed first column */}
      <div className="grid grid-cols-[auto_1fr] gap-8 items-start">
        {/* Column 1: Image + Icons */}
        <div className="flex flex-col mt-5 items-center space-y-4">
          <img
            src={lachlan}
            alt="Lachlan Wallbridge"
            className="w-40 h-40 rounded-full object-cover border-4 border-gray-300"
          />
          <div className="flex justify-center space-x-6 text-3xl">
            <a
              href="https://www.linkedin.com/in/lachlanwallbridge/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-500 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:lachlan.wallbridge@gmail.com"
              className="text-yellow-600 hover:text-yellow-400 transition"
              aria-label="Email"
            >
              <HiOutlineMail />
            </a>
            <a
              href="https://github.com/LachlanWallbri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-500 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Stats */}
        <div className="w-full text-sm text-gray-700 border-t border-b divide-y">
          <div className="py-2 flex justify-between">
            <span className="font-semibold uppercase">🧑‍💼 Name</span>
            <span>Lachlan Wallbridge</span>
          </div>
          <div className="py-2 flex justify-between">
            <span className="font-semibold uppercase">🏫 School</span>
            <span>UNSW</span>
          </div>
          <div className="py-2 flex justify-between">
            <span className="font-semibold uppercase">🎓 Degree</span>
            <span className="text-right">
              Bachelor of Mechatronics (Honours)
              <br />
              &amp; Bachelor of Computer Science
            </span>
          </div>
          <div className="py-2 flex justify-between">
            <span className="font-semibold uppercase">🎯 Grad Year</span>
            <span>2025</span>
          </div>

          <div className="py-2 flex justify-between">
            <span className="font-semibold uppercase">🎂 Age</span>
            <span>{age}</span>
          </div>
          <div className="py-2 flex justify-between">
            <span className="font-semibold uppercase">📍 Location</span>
            <span>Sydney, Australia</span>
          </div>
        </div>
      </div>

      {/* Row 2: Description + Download CV */}
      <div>
        <p className="text-gray-700 mb-4">
          I am a passionate software developer with expertise in web and mobile
          applications. I love building clean, scalable, and user-friendly
          digital experiences.
        </p>

        <div className="text-center">
          <a
            href="/path/to/your-cv.pdf"
            download
            className="
              inline-block
              px-6 py-3
              bg-gradient-to-r from-[#F88F1D] to-[#C72C48]
              text-white
              font-semibold
              rounded-full
              shadow-md
              transition
              duration-300
              ease-in-out
              hover:from-[#FFB347] hover:to-[#E03E52]
              hover:shadow-lg
            "
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
