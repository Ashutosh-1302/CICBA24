import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Holder from '@/components/CoverPageComponents/Holder';
import Footer from '@/components/CoverPageComponents/Footer';
import Carousely from './CoverPageComponents/Carousely';

const Layout = ({ children }) => {
  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden">
      {/* Fixed content at the top */}
      <div className="bg-white py-4 text-center">
        <h2 className="text-xl font-semibold">
          Sixth International Conference on
        </h2>
        <h3 className="text-3xl font-semibold pt-5">
          Computational Intelligence in Communications and Business Analytics (CICBA-2024)
        </h3>
      </div>

      {/* Content with Holder component */}
      <div className="p-4 flex items-center justify-center">
        <Holder />
      </div>

      {/* Links section */}
      <div className="p-3 text-center">
        {/* Links */}
        {/* Add responsive classes to adjust layout on smaller views */}
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-4">
          <a
            className="block text-xl text-orange-900 font-semibold hover:text-blue-900 pt-2"
            target="_blank"
            href="/"
          >
            Presentation Template
          </a>
          <a
            className="block text-xl text-green-500 font-semibold hover:text-blue-900 pt-2"
            target="_blank"
            href="http://www.cicba.in/cicba2023/CICBA%202023%20ORAL%20List.pdf"
          >
            List of papers accepted for oral presentation
          </a>
          <a
            className="block text-xl text-violet-900 font-semibold hover:text-blue-900 pt-2"
            target="_blank"
            href="http://www.cicba.in/cicba2023/CICBA2023_Acceptedand_Registered_Papers.pdf"
          >
            List of Accepted And Registered Papers
          </a>
          <a
            className="block text-xl text-red-600 font-semibold hover:text-blue-900 pt-2"
            target="_blank"
            href="http://www.cicba.in/cicba2023/CICBA%202023%20Program%2027%20Jan.pdf"
          >
            Program Schedule
          </a>
        </div>
      </div>
      <div className="bg-gray-50 text-center pt-4 w-full">
      <h2 className="text-xl font-bold text-orange-500">The proceedings will be published with Springer in their Communications in Computer and Information Science (CCIS) Series (SCImago, Scopus, DBLP)</h2>
       <p className='inline-block'>  (* Final Approval Pending)</p>
      </div>
      {/* Content from each page */}
      <Carousely className="mt-0"/>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>

      {/* Footer */}
      <div className="w-full">
        <Footer className="pl-5" />
      </div>
    </div>
  );
};

export default Layout;
