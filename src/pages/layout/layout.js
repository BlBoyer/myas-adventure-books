import { useState, useEffect, lazy, Suspense } from 'react';
import * as colors from '../../styles/styled-console';

export default function Layout() {
  const [currentPage, setPage] = useState('Welcome');
  const [Page, loadPage] = useState(lazy(() => import('../welcome/welcome')));

  useEffect(() => {
    //hashchange listener - need to stop adding
    window.addEventListener('hashchange', function eventHandler(evt) {
      console.log(`${colors.yw}Setting page from window change, if values are different${colors.ec}`);
      setPage(new URL(evt.newURL).hash.slice(1));
    });
  }, []);

  useEffect(() => {
    console.log(`${colors.mg}${currentPage} from comploader${colors.ec}`);
    loadPage(lazy(() => import(`../${currentPage.toLowerCase()}/${currentPage.toLowerCase()}`)));
  }, [currentPage]);
  return (
    <div>
      <Suspense>
        <Page routeInfo={[currentPage, setPage]} />
      </Suspense>
    </div>
  );
}
