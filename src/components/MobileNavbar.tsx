"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";

const MobileNavbar = () => {
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <>
      <span
        onClick={() => setDisplay((val) => !val)}
        className="h-10 w-10 sm:hidden flex items-center justify-center rounded-full bg-indigo-100 hover:bg-indigo-200"
      >
        <IoMenuSharp className="h-6 w-6 text-indigo-800" />
      </span>
      <span
        className={`${
          display ? "translate-x-0" : "-translate-x-full"
        } duration-300 fixed z-50 top-0 left-0 bg-gradient-to-b from-purple-900/95 to-indigo-800/95 h-screen w-[90%] sm:hidden inline-block backdrop-blur-sm`}
      >
        <ul className="h-full flex flex-col justify-center gap-8 items-center">
          {["home", "about", "products", "cart"].map((val, ind) => (
            <Link key={ind} href={`/${val === "home" ? "" : val}`}>
              <li
                onClick={() => setDisplay(false)}
                className="capitalize font-clash text-white text-xl hover:text-indigo-300 transition-colors duration-200 tracking-wider"
              >
                {val}
              </li>
            </Link>
          ))}
        </ul>
      </span>
    </>
  );
};

export default MobileNavbar;
