"use client";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
import Button from "./Button";
import NavLinks from "./NavLinks";
import Carousely from "../CoverPageComponents/Carousely";
import { FaGreaterThan } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-slate-600 mx-auto">
      <div className="flex items-center font-medium justify-around px-4">
        <div className="z-50 p-2 md:w-auto  flex justify-between ">
          <Link href="/">
            <img
              className="h-9 w-12"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAaVBMVEX///8AAAAkICHq6urPz8/JycnT0tPn5uYIAADh4eGwr6+3t7ebm5sgGx0RCQzx8fFAPj4VEBEvLi739/caFRdxb29aWFkrKClVU1Q6NzhoZ2dLSUo1MjNfXV5FREV3dXanpqeOjY1+fX1E/7ZlAAACZElEQVRoge2a65KiMBBG7RYEZg0MJKPuICrz/g85nSCCXGa5JGtNVZ8/UBLqVFOfbUfdbBiGYRiGYRiGYZhfh/Tlq9RRCmL7KrVC9Rp5IBQKVEfn8uj6ceca3V85KkyPKabnwLE7h/QO5JU6Uxh+bosY079u5cm7QKEIOlx0tgOqOjxQ0nOSn50+dnKL94Kgo3YHitQnc4nkCl3KyR3e9Mkt1O4grqo2nEJUyqFcu/f6ZK/dEVUaFvU1eQidpr3tzndnHbOmoyVF6DJwLTdmOuFFu5kmB5dpb7uFqGP2QF5IniXu3dhTb6q0Owrck7uJWQuddje9vXHDU8waJAVOZS7kD/cOYFBdyZ0E7uHe7PyxNfKk026/8sb9A6a323/sk9xV2q0HbqJbmt5u+X0+0X1Pu93ATXW7SHuEE932076lD024TVys027vI9WMCv0ePsbFYm83A9JQDx/BDBN2xig9DA/38DH0MKFsjM5Rb1SYID9YSXs9DM/DpH3t6ByJWTFrWJ92vd2bX3UtX9Xb5ya8zcq0m4TPjFlLbtK+UF5t90i9xC6ryhemPairvsbTWnmbMv5a09tpe2sS7oGAufcHdI/ep1Pgws8F7g8A8+byAZ/d/n6IpzkuoHt2+iQH+FrgTspSDrk9gLAPVK6uW5blmjGm634DpH1RB0T4M+ReyYBbnLMO4r+5obcI2M1udrOb3exmN7vZ/ZvcW4tuL3oQ7Efct6BZ5NtzYxo3KBx0o2qtSdGeu8Ogu7vGhjuh/U6H/jcReW+NsPKzvPQ6DFXUXeO97B8BDMMwDMMwDMMwzL/4BgGxLhJs1HDAAAAAAElFTkSuQmCC"
              alt="Home image"
            />
          </Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <FaGreaterThan name={`${open ? "close" : "menu"}`}  className="width-[14px] height-[14px]"/>
          </div>
        </div>
        <ul
          className={`md:flex hidden  uppercase items-center gap-6 font-[Poppins] justify-center
          } `}
        >
          <li>
            <Link href="/Speaker" className="inline-block text-white">
              Speakers
            </Link>
          </li>
          <NavLinks />
          {/* <Button /> */}
          <li>
            <Link href="/CallForPaper" className="py-2 inline-block text-white">
              CALL FOR PAPER
            </Link>
          </li>
          <li>
            <Link href="/Tracks" className="inline-block py-2 text-white">
              TRACKS
            </Link>
          </li>
          <li>
            <Link href="/Dates" className="inline-block py-2 text-white">
              DATES
            </Link>
          </li>
          <li>
            <Link href="/Sponsorship" className="inline-block py-2 text-white">
              SPONSORSHIP
            </Link>
          </li>
          <li>
            <Link href="/Gallery" className="inline-block py-2 text-white">
              GALLERY
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="inline-block py-2 text-white">
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Mobile view */}
        <ul
          className={`md:hidden fixed
         bg-gray-600  w-full z-20 overflow-y-auto  py-24 pl-4 
        duration-500 ${open ? " bottom-3" : "bottom-[100%]"}
        `}
        >
          <li>
            <Link href="/Speaker" className="inline-block text-white">
              Speakers
            </Link>
          </li>

          <div className="bg-gray-600 inline-block bg-fixed">
            <NavLinks />
          </div>
          <li>
            <Link href="/CallForPaper" className="py-2 inline-block text-white">
              CALL FOR PAPER
            </Link>
          </li>
          <li>
            <Link href="/Tracks" className="inline-block py-2 text-white">
              TRACKS
            </Link>
          </li>
          <li>
            <Link href="/Dates" className="inline-block py-2 text-white">
              DATES
            </Link>
          </li>
          <li>
            <Link href="/Sponsorship" className="inline-block py-2 text-white">
              SPONSORSHIP
            </Link>
          </li>
          <li>
            <Link href="/Gallery" className="inline-block py-2 text-white">
              GALLERY
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="inline-block py-2 text-white">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
