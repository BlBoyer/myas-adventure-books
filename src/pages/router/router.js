import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import * as colors from '../../styles/styled-console';
import BgImg from '../../components/bg-display-img/bg-display-img';
import BgButton from '../../components/bg-display-button/bg-display-button';

export default function Router() {
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
  return [
    <div className='tooSmall px-m red-2' key='1'>
      Oops! Your device is too zoomed in or too small to view this app.
    </div>,
    <div id='router' className='router index' key='2'>
      <BgButton />
      <Suspense>
        <Page routeInfo={[currentPage, setPage]} />
      </Suspense>
    </div>,
    <div id='bg-drawing' className='display-none' key='3'>
      <BgImg />
    </div>,
  ];
}
