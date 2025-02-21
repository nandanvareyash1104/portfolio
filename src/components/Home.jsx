import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { ReactTyped } from "react-typed";
import pic from "../../public/yash.jpg";

const Home = () => {
  return (
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 text-white">
      <div className="flex flex-col md:flex-row items-center w-full h-screen">
        {/* Image Section (Top in mobile, Left in md+) */}
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
          <img
            src={pic}
            alt="Profile"
            className="rounded-full h-64 w-64 md:h-96 md:w-96 border-4 border-gray-700 mt-10"
          />
        </div>

        {/* Text Content (Bottom in mobile, Right in md+) */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left order-2 md:order-1">
          <h2 className="text-xl md:text-2xl font-semibold">Welcome to My Feed</h2>
          <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-2 text-2xl md:text-4xl font-bold">
            <h1>Hello, I am a</h1>
            <ReactTyped
              strings={["Developer", "Coder", "Programmer"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
              className="text-red-600"
            />
          </div>
          <p className="text-md md:text-lg leading-relaxed">
            I am a passionate React.js Developer dedicated to building dynamic, user-friendly web applications.
            With a strong focus on performance, accessibility, and seamless UI/UX, I enjoy turning complex ideas
            into interactive and responsive interfaces.
          </p>

          {/* Social Media & Technologies */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:justify-between">
            {/* Social Media */}
            <div className="text-center">
              <h2 className="font-bold text-lg">Available On</h2>
              <div className="flex justify-center md:justify-start space-x-5 mt-2">
                <a href="https://www.linkedin.com/in/yash-nandanvare-10549416b/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-3xl cursor-pointer hover:text-blue-500 transition duration-200" />
                </a>
                <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-3xl cursor-pointer hover:text-pink-500 transition duration-200" />
                </a>
                <a href="https://github.com/nandanvareyash1104" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-3xl cursor-pointer hover:text-gray-400 transition duration-200" />
                </a>
              </div>
            </div>

            {/* Technologies */}
            <div className="text-center">
              <h2 className="font-bold text-lg">Currently Working On</h2>
              <div className="flex justify-center md:justify-start space-x-5 mt-2">
                <FaReact className="text-4xl hover:scale-110 duration-200 border-[2px] p-2 rounded-full" />
                <SiMui className="text-4xl hover:scale-110 duration-200 border-[2px] p-2 rounded-full" />
                <RiTailwindCssFill className="text-4xl hover:scale-110 duration-200 border-[2px] p-2 rounded-full" />
                <RiNextjsFill className="text-4xl hover:scale-110 duration-200 border-[2px] p-2 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
