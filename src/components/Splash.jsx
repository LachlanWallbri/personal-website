import videobg from "../assets/1.mp4";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Splash() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videobg}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center">
        <motion.h1
          className="text-5xl font-extrabold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Lachlan Wallbridge
        </motion.h1>

        <motion.p
          className="text-xl text-white drop-shadow-md mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Mechatronics Engineering & Computer Science UNSW
        </motion.p>

        <div className="flex justify-center space-x-8 mt-4 z-10000">
          <a
            href="https://www.linkedin.com/in/lachlanwallbridge/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300 text-3xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:lachlan.wallbridge@gmail.com"
            className="text-white hover:text-yellow-400 transition-colors duration-300 text-3xl"
            aria-label="Email"
          >
            <HiOutlineMail />
          </a>

          <a
            href="https://github.com/LachlanWallbri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors duration-300 text-3xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
