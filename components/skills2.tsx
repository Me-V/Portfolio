"use client";
import React, { useState, useEffect, JSX } from "react";
import styled from "styled-components";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiFastapi,
  SiExpress,
  SiPrisma,
  SiJsonwebtokens,
  SiClerk,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaChevronLeft,
  FaChevronRight,
  FaTools,
  FaGithub,
  FaChrome,
  FaCaretDown,
} from "react-icons/fa";
import {
  TbApi,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandReactNative,
  TbBrandRedux,
} from "react-icons/tb";
import { IoCodeSlash, IoServer } from "react-icons/io5";
import { GrDeploy } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("languages");
  const [isAnimating, setIsAnimating] = useState(false);
  const [bubbleConfigs, setBubbleConfigs] = useState<{
    [key: string]: {
      id: number;
      size: number;
      left: number;
      animationDuration: number;
      animationDelay: number;
      top: number;
    }[];
  }>({});
  const [backendSlide, setBackendSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setIsAnimating(true);

    // Check if mobile device
    const checkIsMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsDropdownOpen(false); // Close dropdown on desktop
      }
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    // Generate consistent bubble configurations based on skill names
    const configs: {
      [key: string]: {
        id: number;
        size: number;
        left: number;
        animationDuration: number;
        animationDelay: number;
        top: number;
      }[];
    } = {};
    Object.keys(skillCategories).forEach((category) => {
      skillCategories[category].forEach((skill) => {
        // Use skill name as seed for consistent random values
        const seed = skill.name
          .split("")
          .reduce((acc, char) => acc + char.charCodeAt(0), 0);
        configs[skill.name] = generateBubbles(seed, skill.level);
      });
    });
    setBubbleConfigs(configs);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const skillCategories: {
    [key: string]: { name: string; level: number; icon: JSX.Element }[];
  } = {
    languages: [
      {
        name: "JavaScript",
        level: 95,
        icon: <SiJavascript className="text-yellow-400" />,
      },
      {
        name: "TypeScript",
        level: 90,
        icon: <SiTypescript className="text-blue-600" />,
      },
      {
        name: "Python",
        level: 85,
        icon: <SiPython className="text-blue-500" />,
      },
      {
        name: "C++",
        level: 85,
        icon: <SiCplusplus className="text-blue-600" />,
      },
      {
        name: "SQL",
        level: 50,
        icon: <FaDatabase className="text-blue-400" />,
      },
    ],
    frontend: [
      {
        name: "HTML / CSS",
        level: 95,
        icon: <IoCodeSlash className="text-orange-500" />,
      },
      { name: "React", level: 90, icon: <FaReact className="text-blue-500" /> },
      {
        name: "Next.js",
        level: 85,
        icon: <TbBrandNextjs className="text-white" />,
      },
      {
        name: "Tailwind CSS",
        level: 90,
        icon: <TbBrandTailwind className="text-cyan-400" />,
      },
      {
        name: "React Native",
        level: 75,
        icon: <TbBrandReactNative className="text-green-500" />,
      },
    ],
    backend: [
      {
        name: "MongoDB",
        level: 90,
        icon: <SiMongodb className="text-green-500" />,
      },
      {
        name: "PostgreSQL",
        level: 80,
        icon: <SiPostgresql className="text-blue-500" />,
      },
      {
        name: "Express",
        level: 95,
        icon: <SiExpress className="text-gray-300" />,
      },
      {
        name: "Node.js",
        level: 95,
        icon: <FaNodeJs className="text-green-600" />,
      },
      {
        name: "REST APIs",
        level: 90,
        icon: <TbApi className="text-green-400" />,
      },

      {
        name: "Redux and Zustand (State Management)",
        level: 80,
        icon: <TbBrandRedux className="text-purple-500" />,
      },
      {
        name: "FastAPI",
        level: 80,
        icon: <SiFastapi className="text-pink-500" />,
      },
      {
        name: "Docker",
        level: 70,
        icon: <IoServer className="text-blue-400" />,
      },
      {
        name: "Prisma and Mongoose",
        level: 75,
        icon: <SiPrisma className="text-white" />,
      },
      {
        name: "JWT",
        level: 90,
        icon: <SiJsonwebtokens className="text-pink-500" />,
      },
      {
        name: "Clerk",
        level: 90,
        icon: <SiClerk className="text-pink-500" />,
      },
      { name: "Redis", level: 80, icon: <SiRedis className="text-red-600" /> },
    ],
    "ai/ml": [
      {
        name: "git / github",
        level: 95,
        icon: <FaGithub className="text-white" />,
      },
      {
        name: "Deployment ( vercel, netlify, aws, render )",
        level: 90,
        icon: <GrDeploy className="text-red-500 mr-2" />,
      },
      {
        name: "VS Code",
        level: 95,
        icon: <VscVscode className="text-blue-500" />,
      },
      {
        name: "Chrome Dev tools",
        level: 80,
        icon: <FaChrome className="text-red-600" />,
      },
    ],
  };

  // Deterministic bubble generator based on seed
  const generateBubbles = (seed: number, level: number) => {
    const bubbles: {
      id: number;
      size: number;
      left: number;
      animationDuration: number;
      animationDelay: number;
      top: number;
    }[] = [];
    const random = (max: number) => {
      seed = (seed * 9301 + 49297) % 233280;
      return (seed / 233280) * max;
    };

    for (let i = 0; i < 8; i++) {
      bubbles.push({
        id: i,
        size: random(6) + 4, // 4-10px
        left: random(level), // 0-level%
        animationDuration: random(3) + 2, // 2-5s
        animationDelay: random(2), // 0-2s
        top: random(60) + 20, // 20-80%
      });
    }
    return bubbles;
  };

  // Component for the progress bar with bubbles
  const ProgressBarWithBubbles = ({
    level,
    skillName,
  }: {
    level: number;
    skillName: string;
  }) => {
    const bubbles: {
      id: number;
      size: number;
      left: number;
      animationDuration: number;
      animationDelay: number;
      top: number;
    }[] = bubbleConfigs[skillName] || [];

    return (
      <div className="w-full bg-gray-800 rounded-full h-2.5 relative overflow-hidden">
        {/* Main progress bar with gradient */}
        <div
          className="h-2.5 rounded-full relative z-10 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
          style={{ width: `${level}%` }}
        >
          {/* Bubbles inside the progress bar - only render on client */}
          {typeof window !== "undefined" &&
            bubbles.map((bubble) => (
              <div
                key={bubble.id}
                className="absolute rounded-full bg-white/40"
                style={{
                  width: `${bubble.size}px`,
                  height: `${bubble.size}px`,
                  left: `${bubble.left}%`,
                  top: `${bubble.top}%`,
                  animation: `bubbleFloat ${bubble.animationDuration}s ease-in-out ${bubble.animationDelay}s infinite`,
                }}
              />
            ))}
        </div>

        {/* Continuous shimmer animation */}
        {isAnimating && (
          <div className="absolute inset-0 z-20">
            <div className="h-full w-10 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-shimmer"></div>
          </div>
        )}
      </div>
    );
  };

  // Handle backend carousel navigation
  const nextBackendSlide = () => {
    setBackendSlide((prev) => (prev + 1) % 2); // 0 or 1 (3 slides)
  };

  const prevBackendSlide = () => {
    setBackendSlide((prev) => (prev - 1 + 2) % 2); // 0 or 1 (3 slides)
  };

  // Get current backend skills for the active slide
  const getCurrentBackendSkills = () => {
    const backendSkills = skillCategories.backend;
    const skillsPerSlide = 6;
    const startIndex = backendSlide * skillsPerSlide;
    return backendSkills.slice(startIndex, startIndex + skillsPerSlide);
  };

  // Get current category name for display
  const getCategoryName = (category: string) => {
    switch (category) {
      case "languages":
        return "Languages";
      case "frontend":
        return "Frontend";
      case "backend":
        return "Backend";
      case "ai/ml":
        return "Tools";
      default:
        return category;
    }
  };

  // Get current category icon for display
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "languages":
        return <IoCodeSlash />;
      case "frontend":
        return <FaReact />;
      case "backend":
        return <IoServer />;
      case "ai/ml":
        return <FaTools />;
      default:
        return <IoCodeSlash />;
    }
  };

  console.log(isMobile);

  return (
    <section className="bg-transparent text-white pb-20 pt-10 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Desktop: Glassmorphic Category Selector */}
        <div className="hidden md:flex justify-center mb-14">
          <GlassRadioGroup>
            <input
              type="radio"
              name="category"
              id="glass-languages"
              checked={activeCategory === "languages"}
              onChange={() => {
                setActiveCategory("languages");
                setBackendSlide(0);
              }}
            />
            <label htmlFor="glass-languages" className="cursor-hover">
              <IoCodeSlash className="mr-2" />
              Languages
            </label>

            <input
              type="radio"
              name="category"
              id="glass-frontend"
              checked={activeCategory === "frontend"}
              onChange={() => {
                setActiveCategory("frontend");
                setBackendSlide(0);
              }}
            />
            <label htmlFor="glass-frontend" className="cursor-hover">
              <IoCodeSlash className="mr-2" />
              Frontend
            </label>

            <input
              type="radio"
              name="category"
              id="glass-backend"
              checked={activeCategory === "backend"}
              onChange={() => {
                setActiveCategory("backend");
                setBackendSlide(0);
              }}
            />
            <label htmlFor="glass-backend" className="cursor-hover">
              <IoServer className="mr-2" />
              Backend
            </label>

            <input
              type="radio"
              name="category"
              id="glass-ai-ml"
              checked={activeCategory === "ai/ml"}
              onChange={() => {
                setActiveCategory("ai/ml");
                setBackendSlide(0);
              }}
            />
            <label htmlFor="glass-ai-ml" className="cursor-hover">
              <FaTools className="mr-2" />
              Tools
            </label>

            <div className="glass-glider" />
          </GlassRadioGroup>
        </div>

        {/* Mobile: Dropdown Menu */}
        <div className="md:hidden flex justify-center mb-8">
          <div className="relative w-full max-w-xs">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <div className="flex items-center">
                <span className="mr-2 text-lg">
                  {getCategoryIcon(activeCategory)}
                </span>
                <span>{getCategoryName(activeCategory)}</span>
              </div>
              <FaCaretDown
                className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute z-50 w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                {Object.keys(skillCategories).map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setBackendSlide(0);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full flex items-center px-4 py-3 text-left hover:bg-gray-700 transition-colors ${
                      activeCategory === category
                        ? "bg-purple-900 text-white"
                        : "text-gray-200"
                    }`}
                  >
                    <span className="mr-2 text-lg">
                      {getCategoryIcon(category)}
                    </span>
                    <span>{getCategoryName(category)}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="relative">
          {activeCategory === "backend" && (
            <div className="absolute -top-2 md:-top-12 right-0 flex space-x-2 mb-0 md:mb-12">
              <button
                onClick={prevBackendSlide}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Previous slide"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextBackendSlide}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Next slide"
              >
                <FaChevronRight />
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === "backend"
              ? getCurrentBackendSkills()
              : skillCategories[activeCategory]
            ).map((skill) => (
              <div
                key={skill.name}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">{skill.icon}</div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>

                <ProgressBarWithBubbles
                  level={skill.level}
                  skillName={skill.name}
                />

                <div className="flex justify-between mt-2 text-sm text-gray-400">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>

          {activeCategory === "backend" && (
            <div className="flex justify-center mt-6">
              <div className="flex space-x-2">
                {[0, 1].map((index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      backendSlide === index ? "bg-purple-500" : "bg-gray-600"
                    }`}
                    onClick={() => setBackendSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }
        @keyframes bubbleFloat {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-5px) scale(1.05);
            opacity: 1;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

// Styled component for the glassmorphic radio group (desktop only)
const GlassRadioGroup = styled.div`
  display: flex;
  position: relative;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 1rem;
  backdrop-filter: blur(12px);
  box-shadow:
    inset 1px 1px 4px rgba(255, 255, 255, 0.2),
    inset -1px -1px 6px rgba(0, 0, 0, 0.3),
    0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  width: fit-content;

  input {
    display: none;
  }

  label {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100px;
    font-size: 14px;
    padding: 0.8rem 1.2rem;
    font-weight: 600;
    letter-spacing: 0.3px;
    color: #e5e5e5;
    position: relative;
    z-index: 2;
    transition: color 0.3s ease-in-out;
  }

  label:hover {
    color: white;
  }

  input:checked + label {
    color: #fff;
  }

  .glass-glider {
    position: absolute;
    top: 0;
    bottom: 0;
    width: calc(100% / 4);
    border-radius: 1rem;
    z-index: 1;
    transition:
      transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56),
      background 0.4s ease-in-out,
      box-shadow 0.4s ease-in-out;
  }

  /* Languages */
  #glass-languages:checked ~ .glass-glider {
    transform: translateX(0%);
    background: linear-gradient(
      135deg,
      rgba(136, 58, 234, 0.33),
      rgba(192, 132, 252, 0.8)
    );
    box-shadow:
      0 0 18px rgba(139, 92, 246, 0.5),
      0 0 10px rgba(216, 180, 254, 0.4) inset;
  }

  /* Frontend */
  #glass-frontend:checked ~ .glass-glider {
    transform: translateX(100%);
    background: linear-gradient(
      135deg,
      rgba(232, 121, 249, 0.33),
      rgba(232, 121, 249, 0.8)
    );
    box-shadow:
      0 0 18px rgba(232, 121, 249, 0.5),
      0 0 10px rgba(240, 171, 252, 0.4) inset;
  }

  /* Backend */
  #glass-backend:checked ~ .glass-glider {
    transform: translateX(200%);
    background: linear-gradient(
      135deg,
      rgba(236, 72, 153, 0.33),
      rgba(236, 72, 153, 0.8)
    );
    box-shadow:
      0 0 18px rgba(236, 72, 153, 0.5),
      0 0 10px rgba(249, 168, 212, 0.4) inset;
  }

  /* AI/ML */
  #glass-ai-ml:checked ~ .glass-glider {
    transform: translateX(300%);
    background: linear-gradient(
      135deg,
      rgba(239, 68, 68, 0.33),
      rgba(239, 68, 68, 0.8)
    );
    box-shadow:
      0 0 18px rgba(239, 68, 68, 0.5),
      0 0 10px rgba(252, 165, 165, 0.4) inset;
  }
`;

export default SkillsSection;
