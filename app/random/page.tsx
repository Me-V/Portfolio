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

const Random = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div
        id="border1"
        className="card p-8 h-[40vh] w-[20vw] bg-gray-800 rounded-2xl shadow-lg text-white flex flex-col"
      >
        <h2 className="text-3xl pt-2 font-bold text-center mb-4">Languages</h2>

        <div className="grid grid-cols-3 gap-5 place-items-center flex-grow">
          <TbBrandCpp className="text-blue-500 text-5xl" />
          <SiJavascript className="text-yellow-400 text-5xl" />
          <SiPython className="text-blue-400 text-5xl" />
          <SiTypescript className="text-blue-600 text-5xl" />
          <SiHtml5 className="text-orange-500 text-5xl" />
          <SiCss3 className="text-blue-500 text-5xl" />
        </div>
      </div>

      <div
        id="border2"
        className="card ml-20 h-[50vh] w-[25vw] p-8 bg-gray-800 rounded-2xl shadow-lg text-white"
      >
        <h2 className="text-2xl pt-6 font-bold text-center mb-6">
          Web Related Stuff
        </h2>

        {/* Grid layout for icons */}
        <div className="grid grid-cols-3 gap-x-2 gap-y-6 gap place-items-center">
          <div className="iso-pro">
            <span></span>
            <span></span>
            <span></span>

            <SiMongodb className="text-green-500 text-5xl svg" />

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

export default Random;
