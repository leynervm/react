import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';

const root = createRoot(document.getElementById('root'));
// <React.StrictMode>
// </React.StrictMode>
root.render(
  <App />
);
