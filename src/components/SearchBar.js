import React from "react";
import filter from "../Assets/header-icon/filter.png";
import search from "../Assets/header-icon/search.png";

const SearchBar = () => {
  return (
    <div>
      <div class=" rounded-lg overflow-hidden drop-shadow">
        <div class="md:flex">
          <div class="w-full p-3">
            <div class="relative">
              <img src={search} className="absolute top-5 left-4" />
              <input
                type="text"
                placeholder="Search Product"
                class="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
              />
              <span class="absolute top-4 right-5  pl-4">
                <img src={filter} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
