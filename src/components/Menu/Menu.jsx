import React from 'react';

export default function Menu({ children }) {
  // Role for SR accessibility
  return (
      <div className="menu" role="menu">{children}</div>
  );
}
