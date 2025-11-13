import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './AppLayout';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Resume from './components/Resume';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'work', element: <Work /> },
      { path: 'resume', element: <Resume /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

export default router;
