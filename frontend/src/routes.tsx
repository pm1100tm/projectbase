import Layout from './components/Layout';
import About from './pages/About';
import Career from './pages/Career';
import Home from './pages/Home';
import Logout from './pages/Logout';

const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/career',
        element: <Career />,
      },
      {
        path: '/logout',
        element: <Logout />,
      },
    ],
  },
];

export default routes;
