import React, { useState,useEffect } from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
import { links } from "./MyLinks";
import { FaGreaterThan } from "react-icons/fa";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.pageYOffset > 0);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const navbarStyle = {
  //   position: 'fixed',
  //   top: 0,
  //   width: '100%',
  //   boxShadow: isScrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
  //   // Add other styling properties
  // };

  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3  text-left md:cursor-pointer group">
            <h1
              className=" hover:bg-green-700 flex justify-between items-center md:pr-0 pr-5 group md:text-white text-white"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              <a href={link.href}>{link.name}</a>
            </h1>
            {link.submenu && (
              <div>
                <div className=" absolute z-20 hidden group-hover:md:block hover:md:block">
                  <div className="bg-gray-500 p-5 grid  gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-white ">
                            <Link
                              href={slink.href}
                              className="hover:text-primary text-white"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "md:hidden"}
          `}
          >
            {/* sublinks */}

            <div>
              {link.sublinks.map((slinks) => (
                <div>
                  <div
                    className={`
                   ${subHeading === slinks.Head ? "md:hidden" : "md:hidden"}`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-2 pl-12 text-white hover:bg-green-700 ">
                        <Link href={slink.href}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
