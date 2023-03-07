import { useEffect } from 'react';
import './navbar.css';
import * as colors from '../../styles/styled-console';

export default function Navbar({ routeInfo }) {
  const pageList = ['Welcome', 'Books', 'Maya', 'Author', 'Illustrator'];
  const navlinks = pageList.map((name, ind) => [
    <a href={`${process.env.PUBLIC_URL}/#${name}`} id={`${name}-link`} key={`a-${ind}`} className='navbar py-s'>
      {name}
      <hr key={`h-${ind}`} className='navbar' />
    </a>,
    <hr id={`${name}-hr`} className='navbar vr-lg' key={`h-${ind + pageList.length}`} />,
  ]);

  useEffect(() => {
    pageList.forEach(name => {
      let link = document.getElementById(`${name}-link`);
      let rule = document.getElementById(`${name}-hr`);

      if (name === routeInfo[0]) {
        console.log(`${colors.mg}${name} link set to inactive${colors.ec}`);
        link.classList.add('inactive-link');
      } else {
        link.addEventListener('click', () => routeInfo[1](name));
      }

      if (name === pageList.slice(-1).toLocaleString()) {
        rule.remove();
      }
    });
  }, []);

  return (
    <div id='navbar' className='navbar row align-c ml-m collapse-stack'>
      {navlinks}
    </div>
  );
}
