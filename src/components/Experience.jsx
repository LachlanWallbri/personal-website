import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const timelineItems = [
  {
    title: "Software Engineer Intern",
    company: "Saber Astronautics",
    date: "January 2025 – May 2025",
    description: [
      "Designed and deployed AWS-based cloud infrastructure for satellite telemetry capture, processing, and task delegation using Pulumi (Infrastructure as Code), Python, Docker, and Kubernetes.",
      "Translated a Docker Compose architecture into a production-ready Kubernetes cluster and configured a local Minikube development environment for testing and validation.",
      "Developed and delivered a containerised command and control platform for custom hardware systems, deployed via IaC and presented to clients to support funding milestones before handoff to senior engineers.",
      "Integrated multiple sensors with an unsupported FPGA platform, translating vendor libraries into Python and interfacing via a custom API to enable rapid prototyping.",
      "Engineered a multithreaded, object-oriented API to manage concurrent hardware operations over a network.",
      "Implemented telemetry ingress and egress pipelines and low-level communication interfaces (UART, SPI, I2C), supporting structured packet formats including NMEA and ICMP.",
    ],
  },
  {
    title: "Freelance Mechatronics Engineer",
    company: "Industrial Engraving Solutions",
    date: "November 2023",
    description: [
      "Set up 3D printers and custom workstation environments for engineers.",
      "Trained staff in machine operation and maintenance.",
      "Designed robust replacement parts for a TROTEC laser cutter using CAD, reducing part costs by over 90%.",
    ],
  },
  {
    title: "Customer Service & Online Supervisor",
    company: "Coles Supermarkets",
    date: "September 2018 – September 2025",
    description: [
      "Managed a team of 5+ online shoppers and 10+ service staff to ensure timely and accurate order fulfillment.",
      "Achieved and maintained a 90%+ perfect order rate.",
      "Monitored operational efficiency and implemented daily review processes.",
      "Increased order speed and fulfillment accuracy by 20% through process improvements.",
    ],
  },
];

// Keywords to bold
const keywords = [
  // Cloud / DevOps
  "AWS",
  "Pulumi",
  "Infrastructure as Code",
  "Python",
  "Docker",
  "Docker Compose",
  "Kubernetes",
  "Minikube",
  "CI/CD",
  "Bitbucket Pipelines",

  // Systems / Embedded
  "FPGA",
  "multithreaded",
  "object-oriented API",
  "telemetry",
  "UART",
  "SPI",
  "I2C",
  "NMEA",
  "ICMP",

  // Delivery / Impact
  "command and control",
  "funding milestones",
  "handoff",
  "90%",
  "20%",

  // Mechatronics
  "3D printers",
  "CAD",

  // Leadership / Operations
  "team of 5+",
  "team of 10+",
  "process improvements",
  "operational efficiency",
];

const waveGradient =
  "linear-gradient(90deg,rgb(22, 59, 119), rgb(86, 133, 207),rgb(22, 59, 119))";

const highlightKeywords = (text) => {
  const escapedKeywords = keywords.map((k) =>
    k.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),
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
    <div className="max-w-4xl mx-auto space-y-8">
      {timelineItems.map((item, index) => {
        const controls = useAnimation();
        const [ref, inView] = useInView({ threshold: 0.5 });

        useEffect(() => {
          if (inView) {
            controls.start({ opacity: 1, y: 0 });
          } else {
            controls.start({ opacity: 0, y: 30 });
          }
        }, [controls, inView]);

        return (
          <motion.div
            ref={ref}
            key={item.title}
            className="relative rounded-lg shadow-md p-6 pl-8"
            style={{
              backgroundImage:
                "linear-gradient(to bottom right,rgb(215, 229, 250) 0%, white 25%, white 80%,rgb(252, 184, 167) 100%)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-bold">
              {item.title} @ {item.company}
            </h3>
            <time className="text-sm text-gray-500">{item.date}</time>
            <ul className="list-disc pl-5 text-sm text-gray-700 mt-2">
              {item.description.map((point, idx) => (
                <motion.li
                  key={idx}
                  className="mb-3"
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
        );
      })}
    </div>
  );
}
