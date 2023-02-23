import Footer from 'components/Footer/Footer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { LayoutBox } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutBox>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </LayoutBox>
  );
};
export default Layout;
