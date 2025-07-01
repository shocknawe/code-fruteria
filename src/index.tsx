import React, { useState, StrictMode, useEffect } from 'react';
import ReactDOM from 'react-dom';
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
const origLoginComponent = LoginComponent;
(LoginComponent as any) = (props: any) => {
  const [_, forceUpdate] = React.useReducer(x => x + 1, 0);
  return React.createElement(origLoginComponent, {
    ...props,
    onLoginSuccess: () => {
      localStorage.setItem('isLoggedIn', 'true');
      window.dispatchEvent(new Event('login-success'));
      forceUpdate();
    }
  });
};

ReactDOM.render(
  <StrictMode>
    <Root />
  </StrictMode>,
  document.getElementById('root')
);
