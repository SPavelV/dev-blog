import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Root, Projects, Contacts, Thoughts, Articles } from './routes';
import { ErrorPage } from './pages';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'articles',
        element: <Articles />,
      },
      {
        path: 'thoughts',
        element: <Thoughts />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
