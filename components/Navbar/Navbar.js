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
    <nav className="bg-slate-600">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto  flex justify-between ">
          <a href="/">
            <span
              className="h-9 w-12  mt-24 text-white md:hidden"
              alt="Home image"
            >
              Home
            </span>
          </a>
          <Link href="/">
            <img
              className="h-9 w-12 max-md:hidden"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAaVBMVEX///8AAAAkICHq6urPz8/JycnT0tPn5uYIAADh4eGwr6+3t7ebm5sgGx0RCQzx8fFAPj4VEBEvLi739/caFRdxb29aWFkrKClVU1Q6NzhoZ2dLSUo1MjNfXV5FREV3dXanpqeOjY1+fX1E/7ZlAAACZElEQVRoge2a65KiMBBG7RYEZg0MJKPuICrz/g85nSCCXGa5JGtNVZ8/UBLqVFOfbUfdbBiGYRiGYRiGYZhfh/Tlq9RRCmL7KrVC9Rp5IBQKVEfn8uj6ceca3V85KkyPKabnwLE7h/QO5JU6Uxh+bosY079u5cm7QKEIOlx0tgOqOjxQ0nOSn50+dnKL94Kgo3YHitQnc4nkCl3KyR3e9Mkt1O4grqo2nEJUyqFcu/f6ZK/dEVUaFvU1eQidpr3tzndnHbOmoyVF6DJwLTdmOuFFu5kmB5dpb7uFqGP2QF5IniXu3dhTb6q0Owrck7uJWQuddje9vXHDU8waJAVOZS7kD/cOYFBdyZ0E7uHe7PyxNfKk026/8sb9A6a323/sk9xV2q0HbqJbmt5u+X0+0X1Pu93ATXW7SHuEE932076lD024TVys027vI9WMCv0ePsbFYm83A9JQDx/BDBN2xig9DA/38DH0MKFsjM5Rb1SYID9YSXs9DM/DpH3t6ByJWTFrWJ92vd2bX3UtX9Xb5ya8zcq0m4TPjFlLbtK+UF5t90i9xC6ryhemPairvsbTWnmbMv5a09tpe2sS7oGAufcHdI/ep1Pgws8F7g8A8+byAZ/d/n6IpzkuoHt2+iQH+FrgTspSDrk9gLAPVK6uW5blmjGm634DpH1RB0T4M+ReyYBbnLMO4r+5obcI2M1udrOb3exmN7vZ/ZvcW4tuL3oQ7Efct6BZ5NtzYxo3KBx0o2qtSdGeu8Ogu7vGhjuh/U6H/jcReW+NsPKzvPQ6DFXUXeO97B8BDMMwDMMwDMMwzL/4BgGxLhJs1HDAAAAAAElFTkSuQmCC"
              alt="Home image"
            />
          </Link>
          <div
            className="text-sm md:hidden text-white   rotate-90"
            onClick={() => setOpen(!open)}
          >
            <FaGreaterThan name={`${open ? "close" : "show"}`} />
          </div>
        </div>
        <ul
          className={` md:flex flex-wrap hidden  uppercase items-center gap-6 font-[Poppins] justify-center
          } `}
        >
          <NavLinks />
        </ul>

        {/* Mobile view */}
        <ul
          className={`md:hidden  top-14 absolute
         bg-gray-600  w-full z-20 overflow-y-auto pl-6
        duration-500 ${open ? " -bottom-40 " : "bottom-[100%]"}
        `}
        >
          <div className="bg-gray-600 overflow-auto  inline-block">
            <NavLinks />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
