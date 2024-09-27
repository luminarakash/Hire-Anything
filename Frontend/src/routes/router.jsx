// src/routes/router.jsx
import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Categories from '../pages/Categories';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import MyService from '../pages/Service';
import Partner from '../pages/Partnerbook';
import Dashboard from '../pages/Dashboard';  // Import Dashboard

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'category',
    element: <Categories />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
  {
    path: 'signup',
    element: <Signup />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'service',
    element: <MyService />,
  },
  {
    path: 'partner',
    element: <Partner />,
  },
  {
    path: 'dashboard',  // New Dashboard Route
    element: <Dashboard />,
  },
]);
