"use client"
import {React,useState} from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Holder from '@/components/Holder';
import Carousel from '@/components/Carousely';
import Carousely from '@/components/Carousely';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
        <div className='bg-white/80'>
      <div className="min-h-1 relative pl-3 pr-3 mx-auto text-center">
    <h2 className='p-4'>Sixth International Conference on</h2>
    <h3 className="font-semibold text-3xl">Computational Intelligence in Communications and Business Analytics (CICBA-2024)</h3>
    </div>
     <div className='p-4 flex items-center justify-center pb-4'>
                <Holder/>
      </div>
      <div className="min-h-1 relative  mx-auto text-center p-3">
        <a className='text-xl text-orange-900 font-semibold hover:text-blue-900' target='_blank' href="/">Presentation Template</a>
        <br/>
        <br></br>
        <a className='text-xl text-green-500 font-semibold hover:text-blue-900' target='_blank' href="http://www.cicba.in/cicba2023/CICBA%202023%20ORAL%20List.pdf">List of papers accepted for oral presentation</a>
        <br/>
        <br/>
        <a className='text-xl text-violet-900 font-semibold hover:text-blue-900' target='_blank' href="http://www.cicba.in/cicba2023/CICBA2023_Acceptedand_Registered_Papers.pdf">List of Accepted And Registered Paper</a>
        <br/>
        <br/>
        <a className='text-xl text-red-600 font-semibold hover:text-blue-900' target='_blank' href="http://www.cicba.in/cicba2023/CICBA%202023%20Program%2027%20Jan.pdf">Program Schedule</a>
        <br/>
        <br/>
       <h2 className='text-l text-yellow-600 font-semibold'>The proceedings will be published with Springer in their Communications in Computer and Information Science (CCIS) Series (SCImago, Scopus, DBLP)</h2> 
       <br/>
       </div>
      <h2 className='text-center font-bold text-red-900 text-2xl'>Review Policy</h2>
        <div className='p-4 flex items-center justify-center pb-4'>
       <br/>
        <Navbar/>        
      </div>    
      <br/>
      <div className='' style={{backgroundImage:`url("")`}}>
        <Carousely/>
     </div>
     </div>
      )
}
