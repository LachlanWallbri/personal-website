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

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-900 scroll-smooth relative z-[-20]">
        <Header />

        <main className="pt-12 z-20">
          {/* to offset fixed header height */}
          <LanternsBackground />
          <section
            id="splash"
            className="min-h-screen flex items-center justify-center"
          >
            <Splash />
          </section>
          <section id="intro" className="max-w-4xl mx-auto py-16 px-4">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              About Me
            </h2>
            <Intro />
          </section>
          <section id="skills" className="w-screen px-0 overflow-hidden">
            <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
            <SkillsHoverBox />
          </section>
          <section id="experience" className="max-w-4xl mx-auto py-16 px-4">
            <Experience />
          </section>
          <section id="projects" className="max-w-6xl mx-auto py-16 px-4">
            <Projects />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
