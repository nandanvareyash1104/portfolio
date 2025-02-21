import React from "react";
import portfolio from "../../public/yash.png";
import restaurant from "../../public/raect_mui-removebg-preview.jpg";
import reactjs from "../../public/reactjs.png";
import event from "../../public/react_redux.jpg";

function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: portfolio,
      name: "Portfolio Website Using React + Tailwind CSS",
      desc: "A sleek and responsive portfolio website built with React and Tailwind CSS, showcasing projects and skills with a modern, minimalist design.",
    },
    {
      id: 2,
      logo: restaurant,
      name: "Restaurant Website using React + Material UI",
      desc: "A stylish restaurant website built with React and Material UI, offering smooth navigation and an intuitive menu display.",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      desc: "A basic ReactJS project to demonstrate component-based architecture and state management.",
    },
    {
      id: 4,
      logo: event,
      name: "Digital Validation using React + Redux ",
      desc: "A digital validation system for event management built with React and Redux, ensuring secure and efficient attendee verification.",
    },
  ];
  return (
    <>
      <section name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 text-white">
        <h1 className="text-3xl font-bold text-center mb-10">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
          {cardItem.map(({ id, logo, name, desc }) => (
            <div
              key={id}
              className="bg-white border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src={logo}
                className="w-full h-40 object-cover rounded border-2 border-black bg-white"
                alt={name}
              />
              <div className="mt-3">
                <h2 className="text-lg font-semibold text-black text-center">
                  {name}
                </h2>
                <p className="text-gray-700 text-sm text-justify mt-2">
                  {desc}
                </p>
              </div>
              <div className="flex justify-center space-x-3 mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded">
                  Visit
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded">
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <hr />
    </>
  );
}

export default Projects;
