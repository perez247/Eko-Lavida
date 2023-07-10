
import React from 'react';
import RootLayout from '../Partials/RootLayout';
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Contact from '../../Pages/Contact';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
          { index: true, element: <Home /> },
          { path: 'about', element: <About /> },
          { path: 'contact', element: <Contact /> }
        ]
    }
]);

const AppRouter = props => {
  return (
    <RouterProvider router={router}>
      {props.children}
    </RouterProvider>
  )
}

export default AppRouter
