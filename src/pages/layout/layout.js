import Welcome from '../welcome/welcome';
import About from '../about/about';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import React, { useState, useEffect, lazy } from 'react';

export default function Layout() {
  const [currentPage, setPage] = useState('Welcome');
  //component swap
  var Page = lazy(() => import('../welcome/welcome'));

  useEffect(() => {
    Page = lazy(() => import(`../${currentPage}/${currentPage}`));
  }, []);
  return (
    <div>
      <React.Suspense>
        <Page routeInfo={[currentPage, setPage]} />
      </React.Suspense>
    </div>
  );
}
