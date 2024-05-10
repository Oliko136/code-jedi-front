import { Suspense, useState, useCallback, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';

const SharedLayout = () => {

  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth >= 1440);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = useCallback(() => {
    if (window.innerWidth < 1440) {
      setShowSidebar(false);
    }
  }, []);

  const escClick = useCallback(
    event => {
      if (event.code === 'Escape') {
        closeSidebar();
      }
    },
    [closeSidebar]
  );

  useEffect(() => {
    window.addEventListener('keydown', escClick);
    return () => {
      window.removeEventListener('keydown', escClick);
    };
  }, [escClick]);

  return (
    <>
      <Header openSidebar={openSidebar} />
      <Sidebar showSidebar={showSidebar} />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
