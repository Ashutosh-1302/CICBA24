import React from 'react';
import Layout from '@/components/Layout';
import Holder from '@/components/CoverPageComponents/Holder';
import Carousely from '@/components/CoverPageComponents/Carousely';
import Footer from '@/components/CoverPageComponents/Footer';
import Navbar from '@/components/Navbar/Navbar';
import Commitee from '@/components/Commitee/Commitee';

export default function Home() {
  return (
    <Layout>
      <div className="p-3 text-center">
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

      <Carousely />
      <div className='p-4 flex items-center justify-center w-auto'>
      <Commitee/>
      </div>
      
{/* Additional content specific to the home page */}
    </Layout>
  );
}
