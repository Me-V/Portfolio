"use client";
import { motion } from "framer-motion";
import {
  SiMongodb,
  SiClerk,
  SiCloudinary,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
} from "react-icons/si";
import { BsDatabaseGear } from "react-icons/bs";
import { TbBrandReactNative, TbBrandSentry } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SkillsSection from "./skills2";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { IconType } from "react-icons";

type Tech = {
  name: string;
  icon: IconType;
  color: string;
};
type Project = {
  title: string;
  description: string;
  tech: Tech[];
  image: string;
  link: string;
  isLive: boolean;
};
const containerStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: "#111111",
  backgroundImage:
    "linear-gradient(32deg, rgba(8, 8, 8, 0.74) 30px, transparent)",
  backgroundSize: "60px 60px",
  backgroundPosition: "-5px -5px",
};

const projects: Project[] = [
  {
    title: "Lively Docs",
    description:
      "A live collaborative text editor made with Next.js and Live Blocks",
    tech: [
      { name: "Next.js", icon: SiNextdotjs, color: "000000" },
      { name: "Sentry", icon: TbBrandSentry, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Clerk", icon: SiClerk, color: "#3178C6" },
    ],
    image: "/projects/project1.png",
    link: "https://livelydocs.vercel.app",
    isLive: true,
  },
  {
    title: "Snap Aura",
    description: "An AI powered image editor tool made with cloudinary",
    tech: [
      { name: "Next.js", icon: SiNextdotjs, color: "000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Cloudinary", icon: SiCloudinary, color: "#F9A03C" },
      { name: "Mongo DB", icon: SiMongodb, color: "#339933" },
    ],
    image: "/projects/project2.png",
    link: "https://snapaura.vercel.app",
    isLive: true,
  },
  {
    title: "Cloud Aura",
    description:
      "A real-time cloud storage app made with Next.js and Convex Database",
    tech: [
      { name: "Next.js", icon: SiNextdotjs, color: "000000" },
      { name: "Convex DB", icon: BsDatabaseGear, color: "#FFCA28" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Clerk", icon: SiClerk, color: "#3178C6" },
    ],
    image: "/projects/project3.png",
    link: "https://cloudaura.vercel.app",
    isLive: true,
  },
  {
    title: "Words Heaven",
    description: "Cross-platform app with personalized book recommendations",
    tech: [
      { name: "MongoDB", icon: SiMongodb, color: "#55c96e" },
      { name: "Express", icon: SiExpress, color: "#fafafa" },
      { name: "React Native", icon: TbBrandReactNative, color: "#3178C6" },
      { name: "Node.js", icon: FaNodeJs, color: "#55c96e" },
    ],
    image: "/projects/project4.png",
    link: "https://github.com/Me-V/Books-App-ReactNative-Expo",
    isLive: false,
  },
];

export default function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 3;
  const totalProjects = projects.length;

  const nextProject = () => {
    if (currentIndex + itemsPerView < totalProjects) {
      setCurrentIndex((prev) => prev + itemsPerView);
    }
  };

  const prevProject = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - itemsPerView);
    }
  };

  // Get visible slice without wrap-around
  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  // Fill empty slots if fewer than 3
  const filledProjects = [
    ...visibleProjects,
    ...Array(itemsPerView - visibleProjects.length).fill(null),
  ];

  return (
    <div style={containerStyle}>
      <section className="pt-24 pb-5 relative id='work'">
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-content mb-4 mt-3 text-center">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full" />
        </motion.div>
        <SkillsSection />

        {/* Projects Section */}
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-content mb-4 text-center">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full" />
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filledProjects.map((project, i) =>
                project ? (
                  <a
                    key={i}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      whileHover={{ y: -10, transition: { duration: 0.2 } }}
                      className="group relative w-full sm:w-[350px] h-[400px] rounded-3xl overflow-hidden bg-surface border border-white/10 cursor-pointer my-class"
                    >
                      {/* Image Section */}
                      <motion.div
                        className="h-[180px] relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                          priority
                        />
                      </motion.div>

                      {/* Content Section */}
                      <motion.div className="p-6 h-[25px] bg-surface">
                        <div className="flex justify-between items-start mb-4 group/title">
                          <h3 className="text-xl font-bold text-content">
                            {project.title}
                          </h3>
                          {project.isLive ? (
                            <span className="text-green-600 glow">Live</span>
                          ) : (
                            <span className="text-black-600 mt-1">
                              <FaGithub size={24} />
                            </span>
                          )}
                        </div>
                        <p className="text-content/80 mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech: Tech, j: number) => (
                            <span
                              key={j}
                              className="px-3 py-1 rounded-full bg-white/5 text-content/80 text-sm border border-white/5 flex items-center gap-1.5"
                            >
                              <tech.icon
                                style={{ color: tech.color }}
                                className="w-4 h-4"
                              />
                              <span>{tech.name}</span>
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  </a>
                ) : (
                  <div key={i} className="h" /> // empty slot
                )
              )}
            </div>

            {/* Controls */}
            <div className="flex justify-center md:justify-end w-full mt-6 md:mt-0 md:absolute md:-top-[15%] md:right-10 space-x-4">
              <button
                onClick={prevProject}
                disabled={currentIndex === 0}
                className="my-class p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors disabled:opacity-50"
                aria-label="Previous"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextProject}
                disabled={currentIndex + itemsPerView >= totalProjects}
                className="my-class p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors disabled:opacity-50"
                aria-label="Next"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mt-7 relative z-[5]"
          >
            <button className="relative px-8 py-3 rounded-full bg-surface border border-white/10 hover:border-primary/10 transition-all group">
              <Link href="https://github.com/Me-V">
                <span className="text-content transition-colors relative z-[1]">
                  View All Projects
                </span>
              </Link>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
