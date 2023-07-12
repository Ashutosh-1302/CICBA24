import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8 flex flex-col lg:flex-row justify-between lg:gap-16 pl-10">
        {/* Social Media Links */}
        <div className="flex flex-wrap space-x-6 mb-6 lg:mb-0">
          <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
        </div>

        {/* Contact Details */}
        <div className="mb-6 lg:mb-0">
          <h4 className="text-lg font-bold mb-2">Contact</h4>
          <p className="text-gray-400">Email: info@example.com</p>
          <p className="text-gray-400">Phone: +1 123-456-7890</p>
          <p className="text-gray-400">Address: 123 Conference Street, City, Country</p>
        </div>

        {/* Additional Links */}
        <div className="flex flex-wrap space-x-6 pr-10">
          <a href="/about" className="text-gray-400 hover:text-white">About</a>
          <a href="/faq" className="text-gray-400 hover:text-white">FAQ</a>
          <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
        </div>
      </div>
      <div className="container mx-auto text-center pr-10 pb-16">
        <p className="text-gray-400">&copy; 2023 Conference Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
