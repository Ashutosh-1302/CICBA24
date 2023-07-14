import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
import { links } from "./MyLinks";
import { FaGreaterThan } from "react-icons/fa";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
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
                  <div className="py-3">
                    <div
                      className=" w-1 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
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
                        <a href={slink.href}>{slink.name}</a>
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
