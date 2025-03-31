import React from "react";
import { TbBrandCpp } from "react-icons/tb";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiClerk,
  SiPostgresql,
  SiTypescript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { SiMongodb, SiPrisma, SiAppwrite } from "react-icons/si";
import { TbDatabase } from "react-icons/tb";

const Skills = () => {
  return (
    <div className="flex flex-col md:flex-row  justify-center mb-32 bg-transparent">
      <div
        id="border1"
        className="card mt-10 lg:mt-0 p-8 h-[60vh] w-[90vw] lg:h-[67vh] lg:w-[38vw] bg-gray-800 rounded-2xl shadow-lg text-white flex flex-col ml-4 lg:ml-0"
      >
        <h2 className="text-3xl pt-2 font-bold text-center mb-4">Languages</h2>

        <div className="grid grid-cols-3 gap-5 place-items-center flex-grow">
          <TbBrandCpp className="text-blue-500 text-5xl lg:text-7xl" />
          <SiJavascript className="text-yellow-400 text-5xl lg:text-7xl" />
          <SiPython className="text-blue-400 text-5xl lg:text-7xl" />
          <SiTypescript className="text-blue-600 text-5xl lg:text-7xl" />
          <SiHtml5 className="text-orange-500 text-5xl lg:text-7xl" />
          <SiCss3 className="text-blue-500 text-5xl lg:text-7xl" />
        </div>
      </div>

      {/* The second box */}

      <div
        id="border2"
        className="card mt-16 mb-10 lg:mb-0 lg:mt-0 h-[60vh] w-[90vw] lg:h-[67vh] lg:w-[38vw] p-8 bg-gray-800 rounded-2xl shadow-lg text-white ml-4 lg:ml-20"
      >
        <h2 className="text-2xl pt-6 font-bold text-center mb-6">
          Web Related Stuff
        </h2>

        {/* Grid layout for icons */}
        <div className="grid grid-cols-3  gap-y-10 lg:gap-y-12 gap place-items-center">
          <div className="iso-pro">
            <span></span>
            <span></span>
            <span></span>

            <SiMongodb className="text-green-500 svg" />

            <div className="text">Mongo DB</div>
          </div>
          <div className="iso-pro">
            <span></span>
            <span></span>
            <span></span>

            <SiPrisma className="text-blue-500 text-5xl svg" />

            <div className="text">Prism ORM</div>
          </div>
          <div className="iso-pro">
            <span></span>
            <span></span>
            <span></span>

            <SiAppwrite className="text-pink-500 text-5xl svg" />

            <div className="text">Appwrite</div>
          </div>
          <div className="iso-pro">
            <span></span>
            <span></span>
            <span></span>

            <TbDatabase className="text-purple-500 text-5xl svg" />

            <div className="text">Convex DB</div>
          </div>
          <div className="iso-pro">
            <span></span>
            <span></span>
            <span></span>

            <SiReact className="text-blue-400 text-5xl svg" />

            <div className="text">React</div>
          </div>
          <div className="iso-pro">
            <span></span>
            <span></span>
            <span></span>

            <SiNextdotjs className="text-white text-5xl svg bg-black rounded-lg p-1" />

            <div className="text">Next JS</div>
          </div>
          <div className="iso-pro">
            <span></span>
            <span></span>
            <span></span>

            <SiTailwindcss className="text-cyan-400 text-5xl svg" />

            <div className="text">Tailwind CSS</div>
          </div>
          <div className="iso-pro">
            <span></span>
            <span></span>
            <span></span>

            <SiClerk className="text-orange-500 text-5xl svg" />

            <div className="text">Clerk</div>
          </div>
          <div className="iso-pro">
            <span></span>
            <span></span>
            <span></span>

            <SiPostgresql className="text-blue-600 text-5xl svg" />

            <div className="text">PostGres</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
