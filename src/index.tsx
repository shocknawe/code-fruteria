import React, { useState, StrictMode, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import LoginComponent from './components/LoginComponent';
import App from './App';

/**
 * Checks if the user is logged in.
 * @returns {boolean}
 */
const isLoggedIn = () => localStorage.getItem('isLoggedIn') === 'true';

/**
 * Root component that handles login state.
 */
const Root: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());

  useEffect(() => {
    // Listen for login event from LoginComponent
    const handler = () => setLoggedIn(isLoggedIn());
    window.addEventListener('login-success', handler);
    return () => window.removeEventListener('login-success', handler);
  }, []);

  if (!loggedIn) {
    return <LoginComponent />;
  }
  return <App />;
};

// Patch LoginComponent to set login flag and dispatch event
// (You can move this logic inside LoginComponent if you prefer)
// moved to LoginComponent.tsx

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <Root />
    </StrictMode>
  );
}
