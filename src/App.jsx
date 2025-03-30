import React from 'react';
import Header from './components/Header';
import Button from './components/Button';
import ThemeContext from './contexts/ThemeContext';

// Separated concerns by adding context folder (fast refresh);
export default function App() {
  return (
    <ThemeContext> 
      <div className="container dark-theme">
        <Header />
        <Button />
      </div>
    </ThemeContext>
  );
}
