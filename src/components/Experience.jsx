export default function Experience() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Work Experience
      </h2>

      <div className="relative border-l-2 border-gray-300 ml-4">
        {/* Example timeline item */}
        <div className="mb-10 ml-6">
          <span className="absolute -left-4 top-2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white"></span>
          <h3 className="text-xl font-bold">Job Title 1</h3>
          <time className="text-sm text-gray-500">Jan 2020 - Present</time>
          <p className="mt-2 text-gray-700">
            Brief description of your role and achievements.
          </p>
        </div>

        {/* More timeline items will go here */}
      </div>
    </div>
  );
}
