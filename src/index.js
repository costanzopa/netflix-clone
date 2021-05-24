import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import 'normalize.css';
import { GlobalStyles } from './Global.style';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
