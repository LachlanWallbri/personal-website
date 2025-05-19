import { motion } from "framer-motion";

const timelineItems = [
  {
    title: "Job Title 1",
    date: "Jan 2020 - Present",
    description: "Brief description of your role and achievements.",
  },
  {
    title: "Job Title 2",
    date: "Jun 2018 - Dec 2019",
    description: "Description of previous role with key responsibilities.",
  },
  {
    title: "Job Title 3",
    date: "Jan 2016 - May 2018",
    description: "Earlier work experience summary.",
  },
];

export default function Experience() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Work Experience
      </h2>

      <div className="relative border-l-2 border-gray-300 ml-4">
        {timelineItems.map(({ title, date, description }, index) => (
          <motion.div
            key={index}
            className="mb-10 ml-6 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }} // <-- set once: false or omit it entirely
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <span className="absolute -left-4 top-2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white"></span>
            <h3 className="text-xl font-bold">{title}</h3>
            <time className="text-sm text-gray-500">{date}</time>
            <p className="mt-2 text-gray-700">{description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
