import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home';
import About from './routes/About';
import Root from './routes/Root';
import { RouterProvider, createHashRouter } from "react-router-dom"
const router = createHashRouter([
  {
      path: "/",
      element: <Root />,
      children: [
          {
              path: "/",
              element: <Home />,
          },
          {
              path: "/about",
              element: <About />,
          },
      ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);







