import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Holder from '../components/CoverPageComponents/Holder';
import Footer from './CoverPageComponents/Footer';

const LaLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed content at the top */}
      <div className="bg-gray-50 py-4 text-center">
        <h2 className="text-xl font-semibold">
          Sixth International Conference on
        </h2>
        <h3 className="text-3xl font-semibold pt-5">
          Computational Intelligence in Communications and Business Analytics (CICBA-2024)
        </h3>
      </div>

      {/* Content with Holder component */}
      <div className="flex-grow p-4 flex items-center justify-center">
        <Holder />
      </div>

      {/* Links section */}
     
  <div className="bg-gray-50 py-4 text-center pb-4 mb-4">
      <h2 className="text-xl font-bold text-orange-500">The proceedings will be published with Springer in their Communications in Computer and Information Science (CCIS) Series (SCImago, Scopus, DBLP)</h2>
      <p className='inline-block'>  (* Final Approval Pending)</p>
      </div>

      {/* Image div */}
      <div
        className="mb-3"
        style={{
          height: "80px",
          width: "100%",
          backgroundImage: `url('./Assets/background.jpg')`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Content from each page */}
      <div className="flex-grow flex justify-center items-center">
        <div className="w-11/12 lg:w-3/4 xl:w-3/4">{children}</div>
      </div>

      {/* Footer */}
      <div className="p-4 flex items-center justify-center pb-4 mt-2">
        <Footer />
      </div>
    </div>
  );
};

export default LaLayout;
