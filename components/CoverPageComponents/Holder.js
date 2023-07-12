import React from 'react';

export default function Holder() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems:'flex-end' }}>
      <div className='pt-6 p-4 shadow-s shadow-gray-800 justify-center mx-auto relative flex flex-row flex-wrap flex-auto gap-x-44 sm:gap-y-6' style={{ display: 'inline-flex' }}>
        <div>
          <img src='http://www.cicba.in/cicba2023/images/springer-logo.png' alt="Springer Logo" />
        </div>
        <div className='flex flex-row pr-4'>
          <img src="http://www.cicba.in/cicba2023/images/logo.png" alt="CICBA Logo" style={{ height: '100px', width: '101px' }} />
          <img src="https://www.nitp.ac.in/static/logo512-579d034908ae89b5e0243d1274937d5d.png" alt="NITP Logo" style={{ height: '220px', width: '251px' }} />
        </div>
        <div>
          <img src="http://www.cicba.in/cicba2023/images/ccis_logo.png" alt="CCIC Image" />
        </div>
      </div>
</div>
  );
}
