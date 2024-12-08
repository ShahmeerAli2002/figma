import React from "react";

const Club = () => {
  return (
    <div className="flex flex-col sm:gap-5 gap-3 items-center xs:my-20 my-14 mmd:px-20 px-5">
      <h1 className="sm:text-4xl xs:text-3xl text-[18px] font-clash text-center">Join the club and get the benefits</h1>
      <p className="xs:w-96 text-center max-sm:text-sm max-xs:text-xs">
        Sign up for our newsletter and receive exclusive offers on new ranges,
        sales, pop up stores and more
      </p>
      <SearchBar/>
    </div>
  );
};

export default Club;

const SearchBar = () => {
  return (
      <span className="sm:w-[500px] xs:w-4/5 w-full sm:h-12 h-10 relative flex mt-5">
        <input
          type="text"
          className="h-full w-full focus:outline-none px-5 bg-lightGray max-sm: text-sm"
          placeholder="your@email.com"
        />
        <button className="absolute top-0 right-0 h-full xs:w-24 max-xs:px-3 text-white capitalize bg-darkPrimary sm:text-sm text-xs">
          sign up
        </button>
      </span>
  );
};
