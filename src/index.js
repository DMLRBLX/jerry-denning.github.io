// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Import your main App component

// This finds the 'root' div in your public/index.html
const container = document.getElementById('root');
// This creates a React "root" to manage your app
const root = createRoot(container);
// This tells React to render your App component inside the 'root' div
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);