import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // добавляем BrowserRouter
import App from './App';

ReactDOM.render(
  <BrowserRouter> {/* оборачиваем App в BrowserRouter */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
