import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import 'normalize.css';
import { GlobalStyles } from './Global.style';
import { firebase } from './lib/firabase.prod';
import { FirebaseContext } from './context/firebase';

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);
