// src/components/LandingLayout.js

import React from 'react';
import Header from './Header';
import Footer from './Footer';

function LandingLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main content grows to take up available space */}
      <div className="flex-grow">
        {children}
      </div>

      {/* Footer pinned to the bottom */}
      <Footer />
    </div>
  );
}

export default LandingLayout;
