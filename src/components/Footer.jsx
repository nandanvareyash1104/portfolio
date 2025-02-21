import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <hr />
      <footer className="py-12 text-white ">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div>
              <ul className="flex space-x-5">
                <a
                  href="https://www.linkedin.com/in/yash-nandanvare-10549416b/"
                  target="_blank"
                >
                  <li>
                    <FaLinkedin className="text-2xl cursor-pointer" />
                  </li>
                </a>
                <a
                  href="https://www.instagram.com/accounts/login/?hl=en"
                  target="_blank"
                >
                  <li>
                    <FaInstagram className="text-2xl cursor-pointer" />
                  </li>
                </a>
                <a href="https://github.com/nandanvareyash1104" target="_blank">
                  <li>
                    <FaGithub className="text-2xl cursor-pointer" />
                  </li>
                </a>
              </ul>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Yash Nandanvare. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
