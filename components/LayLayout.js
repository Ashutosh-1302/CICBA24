import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Holder from '../components/CoverPageComponents/Holder'
import Footer from './CoverPageComponents/Footer';

const LaLayout = ({ children }) => {
  return (
    <div>
      {/* Fixed content at the top */}
      <div className="bg-gray-50 py-4 text-center">
        <h2 className="text-xl font-semibold">
          Sixth International Conference on
        </h2>
        <h3 className="text-3xl font-semibold pt-5">
          Computational Intelligence in Communications and Business Analytics (CICBA-2023)
        </h3>
      </div>

      {/* Content with Holder component */}
      <div className="p-4 flex items-center justify-center">
        <Holder />
      </div>
      <div className="bg-gray-50 py-4 text-center pb-4 mb-4">
      <h2 className="text-xl font-bold text-orange-500">The proceedings will be published with Springer in their Communications in Computer and Information Science (CCIS) Series (SCImago, Scopus, DBLP)</h2>
      
      </div>
      
      {/* Links section */}
      
      {/* Content from each page */}
      <div className='w-full h-1/4' style={{
              backgroundImage: `url('./Assets/background.jpg')`,
              backgroundSize: 'fit',
              backgroundRepeat: 'no-repeat',
            }}>
            </div>
      <div  className="w-3/4  lg:w-3/4 md:w-full  mx-auto border-2 text-center mb-8">
        {children}
      </div>
      

      {/* Footer */}
      <div className="p-4 flex items-center justify-center pb-4 mt-2">
        <Footer />
      </div>
    </div>
  );
};

export default LaLayout;
