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

      {/* Links section */}
      
      {/* Content from each page */}
      <div style={{ width: '50%', margin: '0 auto', border: '2px solid', textAlign: 'center' }}>
        {children}
      </div>
      

      {/* Footer */}
      <div className="p-4 flex items-center justify-center pb-4">
        <Footer />
      </div>
    </div>
  );
};

export default LaLayout;
