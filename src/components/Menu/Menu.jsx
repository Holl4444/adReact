import React from 'react';
import MenuProvider from '../../contexts/MenuProvider';

export default function Menu({ children }) {
  // Role for SR accessibility
  return (
    <MenuProvider>
      <div className="menu" role="menu">{children}</div>
    </MenuProvider>
  );
}
