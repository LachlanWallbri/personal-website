import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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
      <div className="min-h-screen bg-[#070e16] scroll-smooth relative z-[-20]">
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
            <h2 className="text-3xl font-semibold mb-6 text-center text-white">
              Skills
            </h2>
            <SkillsHoverBox />
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
