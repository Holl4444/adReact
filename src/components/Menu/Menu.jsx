import React from 'react';
import Toggle from '../../components/Toggle/index';

export default function Menu({ children }) {
  // Role for SR accessibility
  return (
    <Toggle>
      <div className="menu" role="menu">
        {children}
      </div>
    </Toggle>
  );
}
