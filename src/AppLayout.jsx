import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <>
      <Header />
        {/* This is where the page content renders */}
        <Outlet />
      <Footer />
    </>
  );
}
