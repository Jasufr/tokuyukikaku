import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from './components/ErrorPage.jsx';
import './index.css'

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
