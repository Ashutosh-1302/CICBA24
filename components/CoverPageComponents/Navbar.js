import React from 'react';
import Link from 'next/link';

const Menu_list = [
    { id: 1, text: 'Speakers', href: '#Speakers' },
    { id: 2, text: 'For Authors', href: '#ForAuthors' },
    { id: 3, text: 'Commitee', href: '#Commitee' },
    { id: 4, text: 'Call For Paper', href: '#CallForPaper' },
    { id: 5, text: 'Tracks', href: '#Tracks' },
    { id: 6, text: 'Dates', href: '#Dates' },
    { id: 7, text: 'Venue', href: '#Venue' },
    { id: 8, text: 'Sponsorship', href: '#Sponsorship' },
    { id: 9, text: 'Gallery', href: '#Gallery' },
    { id: 10, text: 'Contact', href: '#Contact' },
  ];
  




export default function Navbar() {

    return (
      <div className='flex bg-whiteflex-grow justify-center' >
        <div className='flex flex-row p-2 items-center bg-slate-700'>
          <Link href='/login'>
            <img
              className='h-12 w-12'
              src='https://static.thenounproject.com/png/3574480-200.png'
              alt='Home image'
            />
          </Link>
        </div>
        <div className='flex flex-row p-2 items-center'>
          <ul className='flex flex-row p-2 items-center space-x-2 text-xl font-light'>
            {Menu_list.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className='text-black  hover:bg-orange-500 self-center rounded-md text-l font-semibold hover:text-yellow-300 px-2'
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
            };