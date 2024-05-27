import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';


import ErrorBoundary from './ErrorBoundary'; // Make sure the path is correct



const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ErrorBoundary>
    
  </ErrorBoundary>,
  </React.StrictMode>
);






