import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="relative h-14 w-full sm:px-10 px-5 flex items-center justify-between border-b border-text/40">
        <IoIosSearch className="h-5 w-5 max-sm:hidden" />
        <Link href="/">
        <h1 className="capitalize text-2xl font-clash">avion</h1>
        </Link>
        <span className="flex gap-4 items-center">
          {[IoIosSearch, IoCartOutline, FaRegUserCircle].map((Icon, ind) =>(
            <Link key={ind} href={`${ind === 1 ? "/cart" : "/"}`}>
            <Icon className={`${ind === 0 ? "sm:hidden" : "max-xs:hidden"} h-5 w-5 `}/>
            </Link>
          ))}
          <MobileNavbar/>
        </span>
      </header>
      <LowerHeader />
    </>
  );
};

export default Header;

const LowerHeader = () => {
  return (
    <nav className="h-12 max-sm:hidden w-full flex items-center justify-center">
      <ul className="h-full flex items-center gap-8">
        {[
          "plan pots",
          "ceramics",
          "tables",
          "chairs",
          "crockery",
          "tableware",
          "cutlery",
        ].map((val, ind) => (
          <li key={ind} className="capitalize text-text cursor-pointer">
            {val}
          </li>
        ))}
      </ul>
    </nav>
  );
};
