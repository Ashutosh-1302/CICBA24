import React from "react";
import Confrence from "../Confrence";
import ExpandableList from "./ExpandableList";

export default function TracksTopic() {
  return (
    <div className="flex  flex-row items-center w-full space-x-10">
    <div className='flex flex-row items-center w-full space-x-10 pl-3 pr-3'>
     <div className='w-full mb-5'>
     <div className='p-2 items-center bg-green-800 rounded-sm w-full flex flex-row space-x-5' style={{border:'1px solid'}}>
      <div className="justify-left h-15"><img src="./Assets/qrcode.png" className="h-8 w-15 pl-5"></img></div>
      <div className="h-15">
    <h2 className='text-xl font-semibold text-white text-center '>TRACKS & TOPICS</h2>
    </div>
    </div>
    <div className='p-1 items-center text-left w-full flex-row space-y-3'>
        
      <div><ExpandableList className="flex"/></div>
      <div><a className='text-blue-500 font-semibold text-l'>Theories and Applications to Data Communications and Analytics</a>
    </div>
       </div>
    </div>
</div>
<div className='flex flex-row items-center w-full space-x-10 pl-3 pr-3'>
     <div className='w-full mb-5'>
     <div className='p-2 items-center bg-green-800 rounded-sm w-full flex flex-row space-x-5' style={{border:'1px solid'}}>
      <div className="justify-left h-15"><img src="./Assets/information.png" className="h-8 w-15 pl-5"></img></div>
      <div className="h-15">
    <h2 className='text-xl font-semibold text-white text-center '>TRACKS & TOPICS</h2>
    </div>
    </div>
    <div className='p-1 items-center text-left w-full'>
    <p className='pb-1'> 		Dr. J. P. Singh, Associate Professor, Dept of Computer Science & Engineering, NIT Patna<br/></p>
    <p className=''>		Dr. Somnath Mukhopadhyay, Associate Professor, Dept of Computer Science & Engineering, Sikkim University, Sikkim<br/></p>
     </div>
    </div>
</div>
</div>
  );
}
