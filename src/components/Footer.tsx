import React from "react";
import { FaPinterest } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrSkype } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
const menu = [
  "Menu",
  "New arrivals",
  "Best sellers",
  "Recently viewed",
  "Popular this week",
  "All products",
];
const categories = [
  "Categories",
  "Crockery",
  "Furniture",
  "Homeware",
  "Plant pots",
  "Chairs",
  "Crockery",
];
const company = [
  "Our company",
  "About us",
  "Vacancies",
  "Contact us",
  "Privacy",
  "Returns policy",
];
const Footer = () => {
  return (
    <footer className="w-full pt-10 bg-darkPrimary text-white mmd:px-20 sm:px-10 px-5">
      <div className="flex flex-wrap justify-between gap-5">
        {[menu, categories, company].map((val, ind) => (
          <List key={ind} listItems={val} />
        ))}
        <SearchBar />
      </div>
      <LowerFooter />
    </footer>
  );
};

export default Footer;

const List = ({ listItems }: { listItems: string[] }) => {
  return (
    <ul className="w-40">
      {listItems.map((val, ind) => (
        <li
          key={ind}
          className={`${
            ind === 0 ? "text-xl capitalize font-clash" : "my-3 text-sm"
          }`}
        >
          {val}
        </li>
      ))}
    </ul>
  );
};

const SearchBar = () => {
  return (
    <span className="flex flex-col gap-4 max-sm:w-full">
      <h2 className="text-xl capitalize font-clash">Join our mailing list</h2>
      <span className="sm:w-[500px] w-full xs:h-12 h-10 relative flex max-xs:text-sm">
        <input
          type="text"
          className="h-full w-full bg-primary/50 px-4 focus:outline-none"
          placeholder="your@email.com"
        />
        <button className="absolute top-0 right-0 h-full w-24 bg-white text-darkPrimary text-sm">
          Sign up
        </button>
      </span>
    </span>
  );
};

const LowerFooter = () => {
  const icons = [
    { Icon: FaLinkedin },
    { Icon: AiFillFacebook },
    { Icon: AiOutlineInstagram },
    { Icon: GrSkype },
    { Icon: FaTwitter },
    { Icon: FaPinterest },
  ];
  return (
    <div className="w-full border-t border-primary flex  items-center xs:justify-between justify-center xs:py-4 py-3 mt-10">
      <p className="text-sm">Copyright 2022 Avion LTD</p>
      <span className="xs:flex hidden gap-4">
        {icons.map(({ Icon }, ind) => (
          <Icon key={ind} className="h-5 w-5" />
        ))}
      </span>
    </div>
  );
};
