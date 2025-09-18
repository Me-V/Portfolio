"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaSchool, FaUniversity, FaBriefcase } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const Testing = () => {
  const timelineItems = useRef<(HTMLLIElement | null)[]>([]);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      checkIsMobile();
      window.addEventListener("resize", checkIsMobile);
      return () => {
        window.removeEventListener("resize", checkIsMobile);
      };
    }
  }, []);

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

  // ✅ Timeline data
  const timelineData = [
    {
      title: "Class X",
      date: "Completed in : 2018",
      subjects: "Mathematics, Science, Social Science, English, Hindi",
      marks: "Percentage :- 87%",
      icon: <FaSchool className="text-white w-6 h-6" />,
    },
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
    <div className="flex justify-center items-center min-h-screen bg-black p-4 md:p-8 relative overflow-hidden">
      {/* Content */}
      <div className="relative max-w-5xl w-full mt-20 mb-10 z-2">
        {/* Page header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-blue-700 bg-clip-text text-transparent mb-4 py-2">
            My Timeline
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of my academic achievements and professional growth
          </p>
        </div>

        {/* Central timeline for desktop, left-aligned for mobile */}
        <div
          className={`absolute ${
            isMobile ? "left-6 md:left-8" : "left-1/2"
          } transform ${isMobile ? "" : "-translate-x-1/2"} w-1 bg-gradient-to-b from-blue-500 to-purple-600 animate-gradient-line z-2`}
          style={{ top: "12rem", bottom: "3rem" }}
        ></div>

        <ul className="space-y-32 relative z-2">
          {timelineData.map((item, index) => {
            const isLeftSide = isMobile ? false : index % 2 === 0;

            return (
              <li
                key={index}
                className={`flex ${
                  isMobile ? "flex-row" : isLeftSide ? "flex-row-reverse" : ""
                } w-full`}
                ref={(el) => {
                  timelineItems.current[index] = el;
                }}
              >
                {/* Timeline content */}
                <div
                  className={`${
                    isMobile
                      ? "w-9/12 ml-auto pl-4 pr-4"
                      : `w-5/12 ${isLeftSide ? "pr-10" : "pl-10"}`
                  }`}
                >
                  <div
                    className={`transition-all duration-700 transform ${
                      visibleItems.includes(index)
                        ? "translate-x-0 opacity-100"
                        : isMobile
                          ? "-translate-x-10 opacity-0"
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
                <div
                  className={`relative ${
                    isMobile ? "w-1/12" : "w-2/12"
                  } flex justify-center items-center`}
                >
                  <div
                    className={`absolute ${
                      isMobile ? "left-0" : "left-1/2"
                    } transform ${isMobile ? "" : "-translate-x-1/2"}`}
                  >
                    <span
                      className={`flex items-center justify-center w-14 h-14 rounded-full ring-8 ring-black transition-all duration-700 ${
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

                {!isMobile && <div className="w-5/12"></div>}
              </li>
            );
          })}
        </ul>

        {/* Animations */}
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
