export default function Projects() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Example project card */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-2">Project Title</h3>
          <p className="text-gray-700">Short project description.</p>
        </div>

        {/* Add more project cards here */}
      </div>
    </div>
  );
}
