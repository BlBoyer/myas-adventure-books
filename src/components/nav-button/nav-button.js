import './nav-button.css';
import { useEffect, useRef } from 'react';
import * as colors from '../../styles/styled-console';
export default function NavButton() {
  const isCollapsed = useRef(true);
  const navbar = useRef();
  useEffect(() => {
    //set navbar hidden
    navbar.current = document.getElementById('navbar');
    navbar.current.classList.add('collapsed');
  }, []);
  function collapseNav() {
    console.log(`${colors.cy}navbar collapsed: ${colors.rd}${isCollapsed.current}${colors.ec}`);
    !isCollapsed.current ? navbar.current.classList.add('collapsed') : navbar.current.classList.remove('collapsed');
    isCollapsed.current = !isCollapsed.current;
  }
  return (
    <div className='nav-button'>
      <button onClick={() => collapseNav()} className='txt-lg bg-translucent'>
        &#8942;
      </button>
    </div>
  );
}
