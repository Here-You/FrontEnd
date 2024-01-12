import React from 'react';
import { ThemeProvider } from 'styled-components';

import App from './App';
import './index.css';
import  worker from './mocks/browser';
import theme from './theme';
import ReactDOM from 'react-dom/client';

if (import.meta.env.VITE_NODE_ENV === 'development') {
  worker.start({ onUnhandledRequest: 'bypass' });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
);
