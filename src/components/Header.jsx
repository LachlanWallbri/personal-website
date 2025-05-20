import { useState } from "react";
import { Menu, X } from "lucide-react"; // optional icons for hamburger and close

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-100 shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">My Portfolio</div>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <a href="#splash" className="hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#intro" className="hover:text-blue-600">
              Intro
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-600">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-blue-600">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-gray-100 shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">
          <li>
            <a
              href="#splash"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-blue-600"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#intro"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-blue-600"
            >
              Intro
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-blue-600"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-blue-600"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-blue-600"
            >
              Projects
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
