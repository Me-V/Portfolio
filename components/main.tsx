"use client";
import { motion } from "framer-motion";
import {
  SiMongodb,
  SiClerk,
  SiCloudinary,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { BsDatabaseGear } from "react-icons/bs";
import { TbBrandSentry } from "react-icons/tb";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import Skills from "./Skills";

// Background styling applied
const containerStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: "#111111",
  backgroundImage:
    "linear-gradient(32deg, rgba(8, 8, 8, 0.74) 30px, transparent)",
  backgroundSize: "60px 60px",
  backgroundPosition: "-5px -5px",
};

const projects = [
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
  },
];

export default function Main() {
  return (
    <div style={containerStyle}>
      <section className="pt-24 pb-16 relative id='work'">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-content mb-4 text-center">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full" />
        </motion.div>
        <Skills />
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-content mb-4 text-center">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full" />
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative h-[500px] rounded-3xl overflow-hidden bg-surface border border-white/10 cursor-pointer"
              >
                {/* Image Section */}
                <motion.div
                  className="h-[250px] relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>

                {/* Content Section */}
                <motion.div
                  className="p-6 h-[25px] bg-surface"
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-start mb-4 group/title">
                    <h3 className="text-2xl font-bold text-content">
                      {project.title}
                    </h3>
                    <ArrowUpRightIcon className="h-6 w-6 text-content/50 group-hover/title:text-primary transition-colors duration-300" />
                  </div>
                  <p className="text-content/80 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full bg-white/5 text-content/80 text-sm border border-white/5 hover:bg-surface transition-colors flex items-center gap-1.5 group/tech"
                      >
                        <tech.icon
                          style={{ color: tech.color }}
                          className="w-4 h-4 transition-colors"
                        />
                        <span className="group-hover/tech:text-content transition-colors">
                          {tech.name}
                        </span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mt-20 relative z-[5]"
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
