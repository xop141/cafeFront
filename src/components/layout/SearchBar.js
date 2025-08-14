import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex h-fit gap-[10px] rounded-full py-2 shadow-sm px-4 border-1 border-white/50 w-[40%]">
      <Search />
      <input
        className="focus:outline-none focus:ring-0 focus:border-0"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
