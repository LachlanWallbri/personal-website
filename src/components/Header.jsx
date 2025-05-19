export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">My Portfolio</div>

        <ul className="flex space-x-6 text-gray-700 font-medium">
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
      </nav>
    </header>
  );
}
