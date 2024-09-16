// src/components/DefaultLayout.js

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content grows to take up available space */}
      <div className="flex-grow">
        {children}
      </div>

      {/* Footer pinned to the bottom */}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
