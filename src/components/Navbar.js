// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo or Brand Name */}
        <Link to="/" className="text-2xl font-bold font-retro">
          Speedrun Attention
        </Link>

        {/* Navigation Links */}
        <div>
          <Link to="/" className="text-white hover:text-teal-500 mx-4">
            Home
          </Link>
          {/* Add more links if needed */}
          <button
            className="bg-transparent border border-teal-500 text-teal-500 px-4 py-2 rounded-full hover:bg-teal-500 hover:bg-opacity-20 transition duration-300"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
