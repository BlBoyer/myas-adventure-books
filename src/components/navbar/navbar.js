import { useEffect } from 'react';
import './navbar.css';

export default function Navbar({ routeInfo }) {
  
  const pageList = ['Welcome', 'About', 'Books', 'Illustrator', 'Author'];
  const navlinks = pageList.map((name, ind) => [
    <a href={`/#${name}`} id={`${name}-link`} key={`a-${ind}`} className='py-m'>
      {name}
      <hr key={`h-${ind}`} />
    </a>,
    <hr id={`${name}-hr`} className='vr-lg' key={`h-${ind + pageList.length}`} />,
  ]);

  useEffect(() => {
    pageList.forEach(name => {
      console.log(`\x1b[95m${name}\x1b[0m`);
      let link = document.getElementById(`${name}-link`);
      let rule = document.getElementById(`${name}-hr`);

      if (name === routeInfo[0]) {
        console.log(`\x1b[95m${name} link set to inactive\x1b[0m`);
        link.classList.add('inactive-link');
      } else {
        link.addEventListener('click', () => routeInfo[1](name));
      }

      if (name === pageList.slice(-1).toLocaleString()) {
        console.log(`\x1b[95mRemoving Last HR\x1b[0m`);
        rule.remove();
      }
    });
  }, []);

  return <div className='row align-c ml-m collapse-stack imagine-border'>{navlinks}</div>;
}
