import './nav-button.css';
import { useEffect, useRef } from 'react';
import * as colors from '../../styles/styled-console';
export default function NavButton() {
  const isCollapsed = useRef();
  const navbar = useRef();
  useEffect(() => {
    //set navbar hidden
    navbar.current = document.getElementById('navbar');
    navbar.current.classList.add('collapsed');
    isCollapsed.current = true;
  }, []);
  function collapseNav() {
    isCollapsed.current = !isCollapsed.current;
    console.log(`${colors.cy}navbar collapsed: ${colors.rd}${isCollapsed.current}${colors.ec}`);
    isCollapsed.current ? navbar.current.classList.add('collapsed') : navbar.current.classList.remove('collapsed');
  }
  return (
    <div className='nav-button'>
      <button onClick={() => collapseNav()} className='nav-button txt-lg button-shade button-glow'>
        &#8942;
      </button>
    </div>
  );
}
