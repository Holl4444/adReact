import React from 'react';
import MenuProvider from '../../contexts/MenuProvider';

export default function Menu({ children }) {
  return (
    <MenuProvider>
      <div className="menu">{children}</div>
    </MenuProvider>
  );
}
