
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { applySecurityHeaders } from './lib/security/security-headers.ts';

// Apply security headers
applySecurityHeaders();

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(error => {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}

const container = document.getElementById("root");
if (!container) {
  throw new Error('Root element not found');
}

// Add safety check for React before rendering
if (!React || typeof React.createElement !== 'function') {
  throw new Error('React is not properly loaded');
}

const root = createRoot(container);
root.render(React.createElement(App));
