import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full border-b shadow-sm px-6 py-4 flex flex-col gap-4 bg-white">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">StayFinder</h1>

        <input
          type="text"
          className="border rounded-full px-4 py-2 w-1/2 outline-none"
          placeholder="Search for properties, locations..."
        />

        <div className="flex items-center gap-4">
          <button className="text-blue-600 font-semibold">Sign In</button>
          <button className="bg-blue-600 px-4 py-2 rounded-full text-white">
            Sign Up
          </button>
        </div>
      </div>

      <nav className="flex gap-6 text-gray-600 font-medium text-sm">
        <span className="cursor-pointer hover:text-blue-600">Rooms</span>
        <span className="cursor-pointer hover:text-blue-600">Mansion</span>
        <span className="cursor-pointer hover:text-blue-600">Countryside</span>
        <span className="cursor-pointer hover:text-blue-600">Penthouse</span>
        <span className="cursor-pointer hover:text-blue-600">Beach House</span>
        <span className="cursor-pointer hover:text-blue-600">Bungalow</span>
      </nav>
    </header>
  );
};

export default Header;
