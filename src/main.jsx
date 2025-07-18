// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-tooltip/dist/react-tooltip.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer position="top-center"/>
  </StrictMode>
);