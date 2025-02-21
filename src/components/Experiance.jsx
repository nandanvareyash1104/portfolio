import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer Part-Time (Remote) - MEVN",
      dates: "3rd May 2023 - 30th Nov 2023",
      company: "Dr. Manisha's Yoga Institute",
      description: `Worked remotely as a full stack developer, Stacks used: Vue.js (frontend), MongoDB, Node.js,
        Express.js, Firebase for blogging A fully Authenticated Admin Panel is also created to perform
        CRUD Operations Using Tailwind CSS to design the whole website Worked independently to
        create engaging web content and reusable components`,
    },
    {
      title: "Software Developer Trainee Full-Time (On-Site) - Salesforce",
      dates: "1st Aug 2023 - 30th Nov 2023",
      company: "Extentia Information Technology",
      description: `Worked as a Software Developer Trainee. Technologies I got to learn over here is Salesforce.
        Along with salesforce, I worked on Programming Language like Apex, Aura and JavaScript.`,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-20">
        {" "}
        {/* Removed max-w-screen-2xl */}
        <div className="grid grid-cols-1 gap-6 justify-center">
          {" "}
          {/* Key change: justify-center */}
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-200 w-full md:w-[600px] mx-auto"
            >
              {" "}
              {/* Key change: mx-auto and w-full */}
              <div className="flex items-start mb-4">
                <div className="bg-green-500 rounded-full w-6 h-6 mr-2 mt-1">
                  <svg
                    className="text-white fill-current w-4 h-4 mx-auto"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* ... (checkmark SVG) */}
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {exp.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{exp.dates}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-2">{exp.company}</p>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
