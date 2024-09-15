import React from 'react';
import Header from './Header';

function LandingLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default LandingLayout;
