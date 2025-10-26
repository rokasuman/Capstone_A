import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer>
      {/* Main container */}
     <div className="flex flex-col md:flex-row justify-between items-start py-5 px-6 md:px-20 md:gap-20 gap-10 max-w-[1200px] mx-auto">

        {/* Left Section */}
        <div className="flex flex-col gap-4 w-full md:w-1/3 items-center md:items-start text-center md:text-left">
          <img
            className="w-20 h-20 rounded-full object-cover shadow-lg"
            src={assets.logo}
            alt="Logo"
          />
          <p className="text-black text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            facere blanditiis quas beatae fugiat sit magnam saepe eveniet
            officia ducimus consequatur, laudantium delectus perspiciatis
            dolorem iusto nam maxime dolore ipsa?
          </p>
        </div>

        {/* Center Section */}
        <div className="flex flex-col gap-3 w-full md:w-1/4 text-center ">
          <p className="font-bold text-xl">Company</p>
          <ul className="flex flex-col gap-2 text-black text-sm">
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Home
            </li>
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              About Us
            </li>
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Contact Us
            </li>
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-3 w-full md:w-1/4 text-center md:text-right">
          <p className="font-bold text-black text-xl">Get in Touch</p>
          <ul className="flex flex-col gap-2 text-black text-sm">
            <li>0411 198 123</li>
            <li>Novahealth@gmail.com</li>
          </ul>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end gap-4 mt-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <img
                src={assets.facebook}
                alt="Facebook"
                className="w-6 h-6 filter grayscale brightness-0
"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <img
                src={assets.twitter}
                alt="Twitter"
                className="w-6 h-6 filter grayscale brightness-0
        "
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <img
                src={assets.linkedin}
                alt="LinkedIn"
                className="w-6 h-6 filter grayscale brightness-0
"
              />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 opacity-50 w-full" />

      <div className="py-4 text-center text-xs text-gray-500">
        Nova HealthCare — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
