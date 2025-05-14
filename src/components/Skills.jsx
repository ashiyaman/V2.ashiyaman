import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGithub } from "react-icons/fa";
import { SiMongodb, SiRedux, SiTailwindcss, SiBootstrap, SiExpress, SiPostman } from "react-icons/si";

import './horizontalScroll.css'

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Javascript", icon: <FaJs className="text-yellow-300" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Node JS", icon: <FaNode className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-slate-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-orange-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-4 px-5 bg-inherit">
      <div className="w-7/8">
        <div className="flex items-center gap-4 py-3">
          <h3 className="text-slate-100 bg-violet-950 shadow-xl uppercase font-semibold px-6 py-4 text-lg rounded-md">
            Skills
          </h3>
          <span className="w-full h-[2px] bg-gradient-to-r from-red-400 via-purple-500 to-cyan-400"></span>
        </div>

        <div className="overflow-hidden relative w-full my-6">
          <div className="flex gap-6 whitespace-nowrap animate-scroll-left min-w-max">
            {[...skills, ...skills].map((skill, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 bg-[#1a1443] text-cyan-300 border border-cyan-500 rounded-xl px-5 py-2 text-lg lg:p-7 font-medium shadow-md"
              >
                <span className="text-xl">{skill.icon}</span>
                <span >{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
