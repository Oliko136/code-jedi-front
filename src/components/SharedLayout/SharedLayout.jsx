import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Sidebar showSidebar={true} />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
