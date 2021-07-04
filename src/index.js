import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function prepare() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser');
    return worker.start();
  }
  return Promise.resolve();
}

prepare().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
});
