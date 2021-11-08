import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { store2 } from './store';

const render = function() {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store2}>
      <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );  
}

render();

store2.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
