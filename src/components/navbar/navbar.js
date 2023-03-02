import { useEffect } from 'react';
import './navbar.css';

export default function Navbar({ page }) {
  /*need to figure out hr or hardcode elements*/
  const pageList = ['Welcome', 'About', 'Books', 'Illustrator', 'Author'];
  const navlinks = pageList.map((name, ind) => [
    <a href={`/#${name}`} id={`${name}-link`} key={`a-${ind}`} className='mx-m py-m'>
      {name}
      <hr key={`h-${ind}`} />
    </a>,
    <hr id={`${name}-hr`} style={{ height: '2em' }} key={`h-${ind + pageList.length}`} />,
  ]);

  //we might need to run a useEffect here to make changes on mount
  //we could also do a React.createElement here, and remove the other function.
  useEffect(() => {
    pageList.forEach(name => {
      console.log(`\x1b[95m${name}\x1b[0m`);
      let link = document.getElementById(`${name}-link`);
      let rule = document.getElementById(`${name}-hr`);

      if (name === page) {
        console.log(`\x1b[95m${name} link set to inactive\x1b[0m`);
        link.classList.add('inactive-link');
      }

      if (name === pageList.slice(-1).toLocaleString()) {
        console.log(`\x1b[95mRemoving Last HR\x1b[0m`);
        rule.remove();
      }
    });
  }, []);

  return <div className='row align-c'>{navlinks}</div>;
}
