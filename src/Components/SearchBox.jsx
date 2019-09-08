import React from "react";

const SearchBox = () => {
  return (
    <div>
      <div className="flex space-between  p-2 mt-32">
        <h1 className="hidden lg:flex lg:w-5/6 text-xl   text-gray_c_t font-b">
          All Games
        </h1>
        <input
          className="w-full lg:w-1/6 text-xl input font-thin placeholder-gray_c_t  px-4 text-white"
          type="search"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchBox;
