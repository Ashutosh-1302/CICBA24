import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-8 flex flex-col lg:flex-row justify-between lg:gap-16 pl-10">
        {/* Social Media Links */}
        <div className="flex flex-wrap flex-col mb-6 lg:mb-0">
          <div>
            <h2 className="text-2xl font-semibold text-white">Follow us</h2>
            <hr className="border-red-500 my-2" />
          </div>
          <div className="flex space-x-4 pt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
          <p className="text-gray-400 my-4">
            &copy; 2023 Conference Name. All rights reserved.
          </p>
        </div>

        {/* Contact Details */}
        <div className="mb-6 lg:mb-0">
          <h4 className="text-lg font-bold mb-2">Contact</h4>
          <hr className="border-red-500 my-2" />
          <p className="text-gray-400">Email: info@example.com</p>
          <p className="text-gray-400">Phone: +1 123-456-7890</p>
          <p className="text-gray-400">
            Address: 123 Conference Street, City, Country
          </p>
          <p className="text-gray-400 mt-4">* Final Approval Pending</p>
        </div>

        {/* Additional Links */}
        <div className="flex flex-col space-y-4 pr-10">
          <a
            href="/"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            About
          </a>
          <a
            href="/Contact"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="/CallForPaper"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Call For Paper
          </a>
          <a
            href="/Dates"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Schedule
          </a>
          <hr className="border-red-500" />
          <a
            
            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm pl-3"
          >
            Developed & Maintained By Ashutosh Singh & Arun Singh
          </a>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
