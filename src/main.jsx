import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
