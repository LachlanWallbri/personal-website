import { motion } from "framer-motion";

const timelineItems = [
  {
    title: "Software Engineer Intern",
    company: "Saber Astronautics",
    date: "January 2025 – Present",
    description: [
      "Deployed AWS-based cloud infrastructure for satellite telemetry capture, processing, and delegation using Pulumi (IaC) and Python.",
      "Translated Docker Compose into a Kubernetes cluster and set up a local development environment with Minikube.",
      "Integrated hardware and developed network protocols for client projects, including potential deployment to the International Space Station.",
      "Interfaced with sensors using UART, SPI, and I2C protocols; supported NMEA and ICMP packet types.",
      "Ported sensor libraries into Python for compatibility with a newly released FPGA via its custom API.",
    ],
  },
  {
    title: "Freelance Mechatronics Engineer",
    company: "Industrial Engraving Solutions",
    date: "November 2023",
    description: [
      "Set up 3D printers and custom workstation environments.",
      "Trained staff in machine operation and maintenance.",
      "Designed robust replacement parts using CAD, reducing part costs by over 90%.",
    ],
  },
  {
    title: "Customer Service & Online Supervisor",
    company: "Coles Supermarkets",
    date: "September 2018 – Present",
    description: [
      "Managed a team of 5+ online shoppers and 10+ service staff to ensure timely and accurate order fulfillment.",
      "Achieved and maintained a 90%+ perfect order rate.",
      "Monitored operational efficiency and implemented daily review processes.",
      "Increased order speed and fulfillment accuracy by 20% through process improvements.",
    ],
  },
];

// Example keywords to bold (you can customize)
const keywords = [
  "AWS",
  "Pulumi",
  "Python",
  "Docker Compose",
  "Kubernetes",
  "Minikube",
  "UART",
  "SPI",
  "I2C",
  "NMEA",
  "ICMP",
  "FPGA",
  "3D printers",
  "CAD",
  "order",
  "team",
  "process improvements",
  "network protocols",
  "client projects",
  "API",
  "90%",
  "20%",
];

const waveGradient = "linear-gradient(90deg, #3b82f6, #06b6d4, #3b82f6)";

const highlightKeywords = (text) => {
  const escapedKeywords = keywords.map((k) =>
    k.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
  );
  const regex = new RegExp(`(${escapedKeywords.join("|")})`, "gi");

  const parts = text.split(regex);

  return parts.map((part, i) => {
    if (regex.test(part)) {
      return (
        <motion.span
          key={i}
          className="font-semibold"
          style={{
            background: waveGradient,
            backgroundSize: "200% 100%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            display: "inline-block",
            whiteSpace: "nowrap",
          }}
          initial={{ backgroundPositionX: "200%" }}
          whileInView={{ backgroundPositionX: "0%" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: 0,
          }}
        >
          {part}
        </motion.span>
      );
    } else {
      return part;
    }
  });
};

export default function Experience() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Work Experience
      </h2>

      <div className="relative border-l-2 border-gray-300 ml-4">
        {timelineItems.map((item, index) => (
          <motion.div
            key={item.title}
            className="mb-10 ml-6 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <span className="absolute -left-4 top-2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white"></span>
            <h3 className="text-xl font-bold">
              {item.title} @ {item.company}
            </h3>
            <time className="text-sm text-gray-500">{item.date}</time>
            <ul className="list-disc pl-5 text-sm text-gray-700 mt-2">
              {item.description.map((point, idx) => (
                <motion.li
                  key={idx}
                  className="mb-3" // increased gap between bullet points
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {highlightKeywords(point)}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
