import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { cn } from "../utility/cn";

function SearchUser() {
  return (
    <div className="flex flex-col items-center justify-center h-full my-7 px-2 rounded-lg shadow-sm">
      <div className="relative flex justify-center items-center">
        <div className="absolute left-3 text-gray-400">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          placeholder="Search for a user..."
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>
    </div>
  );
}

export default SearchUser;
