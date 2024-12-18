import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './credit.css';
import './transaction.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register';
import Account from './components/account/Account';
import Transaction from './components/success-transaction/transaction';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path:"/account",
    element: <Account />,
  },
  {
    path:"/transaction",
    element: <Transaction />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
