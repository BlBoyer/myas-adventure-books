import React, { useState, useEffect, lazy } from 'react';
import * as colors from '../../styles/styled-console';

export default function Layout() {
  const [currentPage, setPage] = useState('Welcome');
  const [Page, loadPage] = useState(lazy(() => import('../welcome/welcome')));

  useEffect(() => {
    //hashchange listener - need to stop adding
    window.addEventListener('hashchange', evt => {
      console.log(
        `${colors.cy}Current Page: ${currentPage} Current Hash: ${window.location.hash}${colors.ec}, \n Should set page if values are different only.`
      );
      if (currentPage !== new URL(evt.newURL).hash.slice(1))
        console.log(`${colors.yw}comploader should fire next${colors.ec}`);
      setPage(new URL(evt.newURL).hash.slice(1));
    });
  }, []);

  useEffect(() => {
    console.log(`${colors.mg}${currentPage} from comploader${colors.ec}`);
    loadPage(lazy(() => import(`../${currentPage.toLowerCase()}/${currentPage.toLowerCase()}`)));
  }, [currentPage]);
  return (
    <div>
      <React.Suspense>
        <Page routeInfo={[currentPage, setPage]} />
      </React.Suspense>
    </div>
  );
}
