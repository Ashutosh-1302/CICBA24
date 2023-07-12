import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8 flex flex-col lg:flex-row justify-between lg:gap-16 pl-10">
        {/* Social Media Links */}
        <div className="flex flex-wrap  flex-col space-x-6 mb-6 lg:mb-0">
          <div>
            <h2 className="text-2xl font-semibold text-white">Follow us</h2>
            <hr style={{ borderColor: "red", borderRadius: "2px" }}></hr>
          </div>
          <div className="flex flex-wrap space-x-6 mb-6 pt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Instagram
            </a>
          </div>
        </div>

        {/* Contact Details */}
        <div className="mb-6 lg:mb-0">
          <h4 className="text-lg font-bold mb-1">Contact</h4>
          <hr style={{ borderColor: "red", borderRadius: "2px" }}></hr>
          <p className="text-gray-400">Email: info@example.com</p>
          <p className="text-gray-400">Phone: +1 123-456-7890</p>
          <p className="text-gray-400">
            Address: 123 Conference Street, City, Country
          </p>
        </div>

        {/* Additional Links */}
        <div className="flex flex-wrap space-x-6 pr-10">
          <a href="/about" className="text-gray-400 hover:text-white">
            About
          </a>
          <a href="/faq" className="text-gray-400 hover:text-white">
            FAQ
          </a>
          <a href="/privacy" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
          <br />
          <hr style={{ borderColor: "red", borderRadius: "2px" }}></hr>
        </div>
      </div>
      <div className="container mx-auto text-center pr-10 flex flex-wrap flex-row lg:gap-16 pb-4">
        <div className="text-gray-400 lg:pl-3">
          &copy; 2023 Conference Name. All rights reserved.
        </div>
        <div className="text-gray-400">* Final Approval Pending</div>
        <div className="text-gray-400  lg:pl-[120px]">
          Designed and Maintained by: Ashutosh Singh & Arun Singh
        </div>
      </div>
    </footer>
  );
};

export default Footer;
