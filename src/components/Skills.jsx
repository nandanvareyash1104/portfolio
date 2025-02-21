import React from "react";
import html from "../../public/html.svg";
import css from "../../public/css.svg";
import redux from "../../public/redux1.png";
import javascript from "../../public/javascript.svg";
import reactjs from "../../public/react.svg";
import mui from "../../public/material.svg";
import git from "../../public/git.png";
import tailwindcss from "../../public/tail.png";
import reactquery from "../../public/reactquery.png";
import bootstrap from "../../public/bootstrap.svg";

const skillsData = [
  { id: 1, logo: html, name: "HTML" },
  { id: 2, logo: css, name: "CSS" },
  { id: 3, logo: javascript, name: "Javascript" },
  { id: 4, logo: reactjs, name: "React JS" },
  { id: 5, logo: mui, name: "Material UI" },
  { id: 6, logo: tailwindcss, name: "Tailwind CSS" },
  { id: 7, logo: redux, name: "Redux" },
  { id: 8, logo: reactquery, name: "React Query" },
  { id: 9, logo: bootstrap, name: "Bootstrap" },
  { id: 10, logo: git, name: "Git" },
];

const Skills = () => {
  return (
    <>
     <section name="Skills" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 text-white">
      <h1 className="text-3xl font-bold text-center mb-10">Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
        {skillsData.map(({ id, logo, name }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center border-2 rounded-full cursor-pointer hover:scale-105 p-4 duration-200 w-[120px] h-[100px] sm:w-[140px] sm:h-[120px] md:w-[170px] md:h-[150px] lg:w-[200px] lg:h-[180px] bg-gray-800 shadow-lg"
          >
            <img src={logo} className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24" alt={name} />
            <span className="text-xs sm:text-sm md:text-base mt-2 font-semibold">{name}</span>
          </div>
        ))}
      </div>
    </section>
    <hr />
    </>
   
  );
};

export default Skills;
