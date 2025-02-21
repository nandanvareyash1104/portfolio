import React from "react";

const AboutExt = () => {
  const experiences = [
    {
      title: "React JS Developer",
      dates: "Dec 2023 - Present",
      company: "Webelight Solution Pvt Ltd",
      description:
        "Worked remotely as a full stack developer, Stacks used: Vue.js (frontend), MongoDB, Node.js, Express.js, Firebase for blogging. Created a fully authenticated admin panel for CRUD operations and designed the website using Tailwind CSS.",
    },
    {
      title: "React JS Trainee",
      dates: "Aug 2023 - Dec 2023",
      company: "Brilworks Solution Pvt Ltd",
      description:
        "Worked as a Software Developer Trainee. Technologies learned include Salesforce, Apex, Aura, and JavaScript.",
    },
  ];

  return (
    <>
    <div
      name="About"
      className="container mx-auto px-6 md:px-20 my-10 text-white"
    >
      <h1 className="text-3xl font-bold mb-5 text-center">
        About
      </h1>
      <p className="leading-relaxed text-center md:text-left">
        Hello, I'm <span className="text-green-600 font-semibold">Yash</span>,
        an experienced React.js developer proficient in building modern web
        applications with a strong foundation in JavaScript, state management,
        and API integration. Passionate about creating user-friendly interfaces
        and eager to contribute to challenging projects.
      </p>

      {/* Education & Training */}
      <div className="mt-8">
        <h2 className="text-green-600 font-semibold text-2xl mb-3 text-center md:text-left">
          Education & Training
        </h2>
        <div className="overflow-x-auto w-full">
          <table className="w-full border border-gray-300 text-sm md:text-base">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="border px-4 py-2 text-left">
                  Degree/Certification
                </th>
                <th className="border px-4 py-2 text-left">Institution</th>
                <th className="border px-4 py-2 text-left">Year</th>
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
              <p className="text-gray-600 font-medium">{exp.company}</p>
              <p className="text-gray-600 mt-2">{exp.description}</p>
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
