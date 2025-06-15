import React from 'react';
import ReactDOM from 'react-dom/client';

import Body from './components/Body';

import './css/App_common.css';
import './css/App_colors.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Body />
  </React.StrictMode>
);