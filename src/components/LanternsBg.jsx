import { useEffect, useState } from "react";
import lanternImage from "../assets/lantern.png";

const LANTERN_COUNT = 12;

const getRandom = (min, max) => Math.random() * (max - min) + min;

const generateLantern = () => ({
  id: crypto.randomUUID(),
  left: `${getRandom(0, 100)}%`,
  size: getRandom(20, 60), // px
  floatDuration: getRandom(20, 40), // seconds for float animation
  floatDelay: getRandom(0, 10),
  opacity: getRandom(0.2, 0.6),

  pulseDuration: getRandom(2, 5), // seconds for pulse animation
  pulseDelay: getRandom(0, 3), // seconds delay for pulse
});

export default function LanternsBackground() {
  const [lanterns, setLanterns] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: LANTERN_COUNT }, generateLantern);
    setLanterns(generated);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-10]">
      {lanterns.map((lantern) => (
        <img
          key={lantern.id}
          src={lanternImage}
          alt="Lantern"
          className="absolute animate-float animate-pulse-light"
          style={{
            left: lantern.left,
            bottom: `-${lantern.size}px`,
            width: `${lantern.size}px`,
            opacity: lantern.opacity,
            animationName: "floatUp, pulse-light",
            animationDuration: `${lantern.floatDuration}s, ${lantern.pulseDuration}s`,
            animationDelay: `${lantern.floatDelay}s, ${lantern.pulseDelay}s`,
            animationIterationCount: "infinite, infinite",
            animationTimingFunction: "linear, ease-in-out",
            animationDirection: "normal, alternate",
          }}
        />
      ))}
    </div>
  );
}
