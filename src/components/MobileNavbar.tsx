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
        className="h-8 w-8 sm:hidden flex items-center justify-center"
      >
        <IoMenuSharp className="h-4/5 w-4/5" />
      </span>
      <span
        className={`${
          display ? "translate-x-0" : "-translate-x-full"
        } duration-500 fixed z-50 top-0 left-0 bg-black/90 h-screen w-4/5 sm:hidden inline-block`}
      >
        <ul className="h-full flex flex-col justify-evenly items-center">
          {["home", "about", "products", "cart"].map((val, ind) => (
            <Link key={ind} href={`/${val === "home" ? "" : val}`}>
              <li
                onClick={() => setDisplay(false)}
                className="capitalize font-clash text-lightGray"
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
