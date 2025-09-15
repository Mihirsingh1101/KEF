import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { AuthProvider } from "./context/AuthContext"

// This now correctly looks for the 'root' div.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <AuthProvider>
      <App />
    </AuthProvider> 
  </React.StrictMode>
);

