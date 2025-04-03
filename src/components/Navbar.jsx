import React from "react";
const Navbar = () => (
  <nav className="bg-white shadow-md fixed w-full top-0 z-10">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold text-black">
          Instrek Technologies
        </h1>
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
