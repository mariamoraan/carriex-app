import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import styled from 'styled-components';
import './i18n';
import './index.css';
import OrderLists from './pages/OrderLists';
import ParcelLists from './pages/ParcelLists';
import ProductList from './pages/ProductList';
import store from './redux/store';

const AppWrapper = styled.div`
  background-image: url("https://img.freepik.com/free-vector/vibrant-fluid-gradient-background-with-curvy-shapes_1017-32108.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: ${window.innerHeight}px;
  @media (min-width: 1000px) {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

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
    <AppWrapper>
      <RouterProvider router={router} />
    </AppWrapper>
  </Provider>
);

