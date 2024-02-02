import React from 'react';
import { ThemeProvider } from 'styled-components';

import App from './App';
import './index.css';
import worker from './mocks/browser';
import theme from './theme';
import { generateCSSForIDs } from './utils/randomColor';
import ReactDOM from 'react-dom/client';

function prepare() {
  if (import.meta.env.VITE_NODE_ENV === 'development') {
    return worker.start({ onUnhandledRequest: 'bypass' });
  }
  return Promise.resolve();
}

const generatedCSS = generateCSSForIDs(0, 100);
const styleElement = document.createElement('style');
styleElement.innerHTML = generatedCSS;
document.head.appendChild(styleElement);

prepare().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>,
  );
});
