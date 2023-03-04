import { useState, useEffect, lazy, Suspense } from 'react';
import * as colors from '../../styles/styled-console';

export default function Layout() {
  const [currentPage, setPage] = useState('Welcome');
  const [Page, loadPage] = useState(lazy(() => import('../welcome/welcome')));

  useEffect(() => {
    //hashchange listener - need to stop adding
    window.addEventListener('hashchange', evt => {
      //the current page logged here is always welcome, idkyy, prob bc it stays whatever value we first give it
      console.log(
        `${colors.cy}New Hash: ${window.location.hash}${colors.ec}, \n Should set page if values are different only.`
      );
      //why are next lines not in braces?
      if (currentPage !== new URL(evt.newURL).hash.slice(1)) {
        console.log(`${currentPage}`);
        console.log(`${colors.yw}comploader should fire next${colors.ec}`);
        setPage(new URL(evt.newURL).hash.slice(1));
      }
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
