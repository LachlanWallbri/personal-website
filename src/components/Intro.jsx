import SkillsHoverBox from "./Skills";

export default function About() {
  return (
    <div className="bg-white rounded-lg shadow p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
      {/* Image */}
      <div className="flex-shrink-0">
        <img
          src="/path/to/your-image.jpg"
          alt="Your Name"
          className="w-40 h-40 rounded-full object-cover border-4 border-gray-300"
        />
      </div>

      {/* Text content */}
      <div className="flex-1">
        <h2 className="text-3xl font-semibold mb-4">About</h2>

        {/* Overview */}
        <p className="text-gray-700 mb-6">
          {/* Replace with your overview */}I am a passionate software developer
          with expertise in web and mobile applications. I love building clean,
          scalable, and user-friendly digital experiences.
        </p>

        {/* Download CV Button */}
        <a
          href="/path/to/your-cv.pdf"
          download
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
