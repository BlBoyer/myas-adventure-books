import './nav-button.css';
import { useRef } from 'react';
import * as colors from '../../styles/styled-console';
export default function NavButton() {
  const isCollapsed = useRef(true);
  //add class collapsed to navbar
  function collapseNav() {
    console.log(`${colors.rd}${isCollapsed.current}${colors.ec}`);
    isCollapsed.current
      ? document.getElementById('navbar').classList.add('collapsed')
      : document.getElementById('navbar').classList.remove('collapsed');
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
