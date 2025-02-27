import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const AboutExt = () => {
  const experiences = [
    {
      title: "React JS Developer",
      dates: "Aug 2023 - Present",
      company: "Webelight Solution Pvt Ltd",
      description: (
        <ul className="list-disc pl-5 text-gray-700">
          <li>
            "Book the Play" is a collaborative project where I utilized React.js
            for front-end development, actively contributing to various aspects
            such as data integration and version control with Git.
          </li>
          <li>
            Through this project, I gained valuable hands-on experience in
            building responsive interfaces and optimizing user experiences to
            ensure a seamless booking process for users.
          </li>
          <li>
            Skilled in React.js, state management, and performance optimization,
            I focus on delivering clean, efficient, and user-friendly
            applications.
          </li>
        </ul>
      ),
    },
    {
      title: "React JS Trainee",
      dates: "Apr 2023 - Aug 2023",
      company: "Brilworks Solution Pvt Ltd",
      description: (
        <ul className="list-disc pl-5 text-gray-700">
          <li>
            Developed responsive user interfaces and implemented new features
            using React.js, ensuring seamless and efficient front-end
            functionality.
          </li>
          <li>
            Worked collaboratively in a team environment, participating in daily
            stand-up meetings, contributing to debugging and issue resolution,
            and enhancing teamwork and project planning skills.
          </li>
          <li>
            Actively engaged in Git-based version control and continuous
            learning while closely collaborating with the development team to
            deliver real-world web projects.
          </li>
        </ul>
      ),
    },
  ];
  return (
    <>
      <div
        name="About"
        className="container mx-auto px-6 md:px-20 my-10 text-white"
      >
        <h1 className="text-3xl font-bold mb-5 text-center">About</h1>
        <p className="leading-relaxed text-justify md:text-left">
          Hello, I'm <span className="text-green-600 font-semibold">Yash</span>,
          an experienced React.js developer proficient in building modern web
          applications. I have a strong foundation in JavaScript, state
          management, and API integration. Passionate about creating
          user-friendly interfaces, I am eager to contribute to challenging
          projects and deliver high-quality solutions.
        </p>

        {/* Education & Training */}
        <div className="mt-8 text-center ">
          <h2 className="text-green-600 font-semibold text-2xl mb-3 text-center md:text-left">
            Education
          </h2>
          <div className="overflow-x-auto flex justify-center ">
            <table className="w-50 border border-gray-300 text-sm md:text-base ">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="border px-4 py-2 text-center">
                    Degree/Certification
                  </th>
                  <th className="border px-4 py-2 text-center">Institution</th>
                  <th className="border px-4 py-2 text-center">Year</th>
                </tr>
              </thead>
              <tbody className="text-gray-800 bg-white">
                {[
                  [
                    "🎓 Bachelor of Engineering in I.T.",
                    "GEC Modasa (GTU)",
                    "2023",
                  ],
                  [
                    "🎓 Diploma Engineering In I.T.",
                    "R C Technical Institute (GTU)",
                    "2019",
                  ],
                  ["📚 S.S.C.", "GSEB", "2016"],
                ].map(([degree, institution, year], index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border px-4 py-2">{degree}</td>
                    <td className="border px-4 py-2">{institution}</td>
                    <td className="border px-4 py-2">{year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-8">
          <h2 className="text-green-600 font-semibold text-2xl mb-3 text-center md:text-left">
            Experience
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-200 md:w-[600px] mx-auto"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {exp.title}
                </h3>
                <p className="text-gray-500 text-sm mb-2">{exp.dates}</p>
                <div className="flex flex-row items-center space-x-2">
                  <FaLocationDot className="text-gray-500 text-lg" />
                  <p className="text-gray-600 font-medium">{exp?.company}</p>
                </div>
                <p className="text-gray-600 mt-2 text-justify text-sm">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default AboutExt;
