import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './i18n';
import './index.css';
import OrderLists from './pages/OrderLists';
import ParcelLists from './pages/ParcelLists';
import ProductList from './pages/ProductList';
import store from './redux/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ParcelLists />,
  },
  {
    path: "parcel/:parcel",
    element: <OrderLists />,
  },
  {
    path: "parcel/:parcel/order/:order",
    element: <ProductList />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

