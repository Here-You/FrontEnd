import React from 'react';
import { ThemeProvider } from 'styled-components';

import App from './App';
import './index.css';
import worker from './mocks/browser';
import theme from './theme';
import { generateCSSForIDs } from './utils/randomColor';
import ReactDOM from 'react-dom/client';

if (import.meta.env.VITE_NODE_ENV === 'development') {
  worker.start({ onUnhandledRequest: 'bypass' });
}

const generatedCSS = generateCSSForIDs(0, 100);

const styleElement = document.createElement('style');
styleElement.innerHTML = generatedCSS;
document.head.appendChild(styleElement);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
);
