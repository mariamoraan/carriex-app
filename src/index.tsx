import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './i18n';
import './index.css';
import OrderLists from './pages/OrderLists';
import ParcelLists from './pages/ParcelLists';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ParcelLists />,
  },
  {
    path: "parcel/:id",
    element: <OrderLists />,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

