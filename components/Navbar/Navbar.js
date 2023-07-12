import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
import Button from "./Button";
import NavLinks from "./NavLinks";
import Carousely from "../CoverPageComponents/Carousely";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <div className="flex flex-row p-2 items-center bg-slate-700">
            <Link href="/login">
              <img
                className="h-12 w-12"
                src="https://static.thenounproject.com/png/3574480-200.png"
                alt="Home image"
              />
            </Link>
          </div>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-6 font-[Poppins]">
          <li>
            <a href="/" className="py-7 px-3 inline-block">
              Speakers
            </a>
          </li>
          <NavLinks />
          {/* <Button /> */}
          <li>
            <a href="/" className="py-7 px-3 inline-block">
              CALL FOR PAPER
            </a>
          </li>
          <li>
            <a href="/" className="py-7 px-3 inline-block">
              TRACKS
            </a>
          </li>
          <li>
            <a href="/" className="py-7 px-3 inline-block">
              DATES
            </a>
          </li>
          <li>
            <a href="/" className="py-7 px-3 inline-block">
              SPONSORSHIP
            </a>
          </li>
          <li>
            <a href="/" className="py-7 px-3 inline-block">
              GALLERY
            </a>
          </li>
          <li>
            <a href="/" className="py-7 px-3 inline-block">
              CONTACT
            </a>
          </li>
        </ul>
        <div className="md:block hidden"></div>
      </div>
    </nav>
  );
};

export default Navbar;
