"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaSchool, FaUniversity, FaBriefcase } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const Testing = () => {
  const timelineItems = useRef<(HTMLLIElement | null)[]>([]);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = timelineItems.current.indexOf(
              entry.target as HTMLLIElement
            );
            if (!visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    timelineItems.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      timelineItems.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, [visibleItems]);

  // Canvas animation for background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }[] = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      const size = Math.random() * 2 + 0.5;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const speedX = (Math.random() - 0.5) * 0.2;
      const speedY = (Math.random() - 0.5) * 0.2;

      // Different colors for particles
      const colors = [
        "rgba(59, 130, 246, 0.5)",
        "rgba(139, 92, 246, 0.5)",
        "rgba(236, 72, 153, 0.5)",
        "rgba(245, 158, 11, 0.5)",
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];

      particles.push({ x, y, size, speedX, speedY, color });
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with a dark translucent overlay
      ctx.fillStyle = "rgba(15, 15, 25, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // ✅ Updated Timeline Data with larger content
  const timelineData = [
    {
      title: "Class X",
      date: "Completed in : 2018",
      subjects: "Mathematics, Science, Social Science, English, Hindi",
      marks: "Percentage :- 87%",
      icon: <FaSchool className="text-white w-6 h-6" />,
    },
    // {
    //   title: "Class XII",
    //   date: "Completed in :- 2020",
    //   subjects:"Physics, Chemistry, Mathematics, English",
    //   marks:
    //     "Percentage :- 84%",
    //   icon: <MdSchool className="text-white w-6 h-6" />,
    // },
    {
      title: "Class XII",
      date: "Completed in : 2020",
      subjects: "Physics, Chemistry, Mathematics, English",
      marks: "Percentage :- 84%",
      icon: <MdSchool className="text-white w-6 h-6" />,
    },
    {
      title:
        "University - JC Bose University Of Science and Technology, ( YMCA )",
      date: "Completed in : June, 2025",
      subjects: "B.Tech Computer Science and Engineering",
      marks: "CGPA :- 7.53",
      icon: <FaUniversity className="text-white w-6 h-6" />,
    },
    {
      title: "Worked At Future Craft AI",
      date: "April, 2025 ~ June, 2025",
      subjects:
        "Junior Software Development Engineer Intern at Future Craft AI. Worked on real-world projects involving React, Next.js, Node.js, and REST APIs. Contributed to 3 major projects during the internship.",
      marks: "",
      description: "",
      icon: <FaBriefcase className="text-white w-6 h-6" />,
      isLatest: true,
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-850 to-gray-900 p-4 md:p-8 relative overflow-hidden">
      {/* Animated canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/70 to-gray-900/80 z-1"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-10 z-1"></div>

      {/* Content */}
      <div className="relative max-w-5xl w-full mt-20 mb-10 z-2">
        {/* Page header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-blue-700 bg-clip-text text-transparent mb-4 py-2">
            {" "}
            My Timeline{" "}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of my academic achievements and professional growth
          </p>
        </div>

        {/* Central timeline */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-600 animate-gradient-line z-2"
          style={{ top: "12rem", bottom: "3rem" }} // 👈 leaves 3rem gap after last icon
        ></div>

        <ul className="space-y-32 relative z-2">
          {timelineData.map((item, index) => {
            const isLeftSide = index % 2 === 0;

            return (
              <li
                key={index}
                className={`flex ${isLeftSide ? "flex-row-reverse" : ""} w-full`}
                ref={(el) => {
                  timelineItems.current[index] = el;
                }}
              >
                {/* Timeline content */}
                <div className={`w-5/12 ${isLeftSide ? "pr-10" : "pl-10"}`}>
                  <div
                    className={`transition-all duration-700 transform ${
                      visibleItems.includes(index)
                        ? "translate-x-0 opacity-100"
                        : isLeftSide
                          ? "translate-x-10 opacity-0"
                          : "-translate-x-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 150 + 200}ms` }}
                  >
                    <div className="bg-gray-800/70 backdrop-blur-md rounded-xl shadow-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                      <h3 className="flex items-center mb-3 text-2xl font-bold text-white group">
                        {item.title}
                        {item.isLatest && (
                          <span className="bg-blue-500/20 text-blue-300 text-sm font-medium me-2 px-3 py-1 rounded-full ml-3 transform transition-transform group-hover:scale-105">
                            Latest
                          </span>
                        )}
                      </h3>

                      <time
                        className={`block mb-4 text-lg font-semibold text-blue-400 ${
                          visibleItems.includes(index)
                            ? "animate-fade-in"
                            : "opacity-0"
                        }`}
                        style={{ animationDelay: `${index * 200 + 300}ms` }}
                      >
                        {item.date}
                      </time>

                      <p className="text-lg font-normal text-gray-300 transition-all duration-500 hover:text-gray-100 leading-relaxed">
                        {item.subjects}
                      </p>
                      <p className="text-lg font-normal text-gray-300 transition-all duration-500 hover:text-gray-100 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline center with icon */}
                <div className="relative w-2/12 flex justify-center items-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <span
                      className={`flex items-center justify-center w-14 h-14 rounded-full ring-8 ring-gray-900 transition-all duration-700 ${
                        visibleItems.includes(index)
                          ? "scale-100 opacity-100 bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl animate-pulse-glow"
                          : "scale-0 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {item.icon}
                    </span>
                  </div>
                </div>

                {/* Empty space on the other side */}
                <div className="w-5/12"></div>
              </li>
            );
          })}
        </ul>

        {/* Custom animations */}
        <style jsx>{`
          @keyframes pulse-glow {
            0% {
              box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
            }
            70% {
              box-shadow: 0 0 0 12px rgba(59, 130, 246, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
            }
          }

          @keyframes gradient-line {
            0% {
              background-position: 0% 0%;
            }
            50% {
              background-position: 0% 100%;
            }
            100% {
              background-position: 0% 0%;
            }
          }

          @keyframes fade-in {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .bg-grid-pattern {
            background-image: linear-gradient(
                rgba(255, 255, 255, 0.05) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.05) 1px,
                transparent 1px
              );
          }

          .animate-pulse-glow {
            animation: pulse-glow 2s infinite;
          }

          .animate-gradient-line {
            background: linear-gradient(
              to bottom,
              #3b82f6,
              #8b5cf6,
              #ec4899,
              #f59e0b,
              #3b82f6
            );
            background-size: 100% 400%;
            animation: gradient-line 4s linear infinite;
          }

          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Testing;
