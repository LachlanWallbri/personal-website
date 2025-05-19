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

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 scroll-smooth">
      <Header />

      <main className="pt-12">
        {" "}
        {/* to offset fixed header height */}
        <section
          id="splash"
          className="min-h-screen flex items-center justify-center"
        >
          <Splash />
        </section>
        <section id="intro" className="max-w-4xl mx-auto py-16 px-4">
          <Intro />
          <h2 className="text-3xl font-semibold mt-12 mb-6">My Skills</h2>
          {/* Skills */}
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
  );
}

export default App;
