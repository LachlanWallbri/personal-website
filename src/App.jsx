import { useState } from "react";

import "./App.css";

import fireplace from "./assets/fireplace.mp4";

import Header from "./components/Header";
import Splash from "./components/Splash";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SkillsHoverBox from "./components/Skills";
import LanternsBackground from "./components/LanternsBg";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800
 scroll-smooth relative z-[-20]"
      >
        <main className="pt-12 z-20">
          <LanternsBackground />
          {/* Splash Screen */}
          <section
            id="splash"
            className="min-h-screen flex items-center justify-center"
          >
            <Splash />
          </section>
          {/* Main Content */}
          <section id="intro" className="max-w-4xl mx-auto py-16 px-4">
            <h2 className="text-3xl font-semibold mb-6 text-center text-white">
              About Me
            </h2>
            <Intro />
          </section>
          {/* Skills Section */}
          <section id="skills" className="w-full px-0 overflow-hidden">
            <div className="relative w-screen max-w-full mx-0 mt-4 overflow-hidden shadow-lg select-none min-h-[40rem] flex flex-col items-center justify-center">
              {/* 🔥 Background Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0 wavy-clip"
              >
                <source src={fireplace} type="video/mp4" />
              </video>

              <h2 className="text-3xl font-semibold mb-6 text-center text-white z-10">
                Skills
              </h2>
              <SkillsHoverBox />
            </div>
          </section>
          {/* Experience Section */}
          <section id="experience" className="max-w-4xl mx-auto py-16 px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center text-white">
              Work Experience
            </h2>
            <Experience />
          </section>
          {/* Projects Section */}
          <section id="projects" className="max-w-6xl mx-auto pt-16 px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center text-white">
              Projects
            </h2>
            <Projects />
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
