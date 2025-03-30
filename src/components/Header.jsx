import React from 'react';
import { ThemeContext } from '../App';

export default function Header() {
  const value = React.useContext(ThemeContext);
  const themeText = `${value
    .split('')
    .slice(0, 1)
    .toUpperCase()}${value.split('').slice(1).join('')}`;
  return (
    <header className={`${value}-theme`}>
      <h1>{themeText} Theme</h1>
    </header>
  );
}
