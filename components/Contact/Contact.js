import React from 'react';

export default function contact() {
  return (
    <div className="lg:grid lg:grid-cols-2 md:flex-col bg-white h-3/4">
      <div className="p-4 flex flex-col pb-4 shadow-sm ">
    <div className="text-left pl-4">
    <div  className='text-left flex flex-row' style={{
            background:
              "repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(0, 0, 0, 0.1) 5px, rgba(0, 0, 0, 0.1) 10px)",
            backgroundSize: "10px 100%",
            height: "auto",
            backgroundRepeat: "repeat",
          }}> <div className="h-15">
          <img src="./Assets/location.png" className="h-6 w-13 pl-2 pt-2" />
        </div><div className='pl-2'><h2 className="text-xl font-semibold" >Location</h2></div></div>
            <hr className='border-2 bg-slate-700'></hr>
        </div>
      
        <br/>
        <div className='text-left'> 
          <a className='text-blue-400 font-semibold text-lg pl-4' href="/" >CICBA-24</a>
       <br/>
       <p className='text-left pl-4'>
       Department of Computer Science & Engg.,<br/>
        National Institute Of Technology Patna,<br/>
        Ashok Rajpath, Patna - 800005.
       </p>
        
    </div>
      </div>
      <div className="p-4 flex flex-col pb-4 shadow-sm">
    <div className="text-left pl-4 ">
      <div  className='text-left flex flex-row' style={{
            background:
              "repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(0, 0, 0, 0.1) 5px, rgba(0, 0, 0, 0.1) 10px)",
            backgroundSize: "10px 100%",
            height: "auto",
            backgroundRepeat: "repeat",
          }}> <div className="justify-left">
          <img src="./Assets/information.png" className="h-6 w-13 pl-2 pt-2" />
        </div><div className='pl-2'><h2 className="text-xl font-semibold" >Contact</h2></div></div>
            <hr className='border-2 bg-slate-700'></hr>
        </div>
        <br/>
        <div className='text-left pl-4'> 
          <p className='text-left py-2'>
       Organizing Chairs/Program Chairs,CICBA-2023,<br/>
        National Institute Of Technology Patna,<br/>
        Ashok Rajpath, Patna - 800005.
         <br/>
         Dr.Jyoti Prakash Singh : - +91 85211 59014
         </p>
    </div>
      </div>    
      </div>
  );
}
