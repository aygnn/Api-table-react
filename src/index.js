import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
}
 from "react-router-dom";

import Add from './pages/Add/Add'
import View from './pages/View/View'
import Table from './pages/Table/Table'
import Edit from './pages/Edit/Edit'




const router = createBrowserRouter(    
  [
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element: <Table />,
      },
      {
        path:"view/:supID",
        element:<View/>
      },
      {
        path:"edit/:supID",
        element:<Edit/>
      },
      {
        path: "add",
        element: <Add />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
