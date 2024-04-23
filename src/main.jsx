import React from 'react'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Recruit from './pages/Recruit.jsx';
import ServiceHoumon from './pages/ServiceHoumon.jsx';
import ServiceTaxi from './pages/ServiceTaxi.jsx';
import ServiceDay from './pages/ServiceDay.jsx';
import ServiceKyotaku from './pages/ServiceKyotaku.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/recruit",
    element: <Recruit />,
  },
  {
    path: "/houmon",
    element: <ServiceHoumon />,
  },
  {
    path: "/taxi",
    element: <ServiceTaxi />,
  },
  {
    path: "/dayservice",
    element: <ServiceDay />,
  },
  {
    path: "/kyotaku",
    element: <ServiceKyotaku />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
