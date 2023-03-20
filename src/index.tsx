import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import './index.css';
import ParcelLists from './pages/ParcelLists';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ParcelLists />
  </React.StrictMode>
);

