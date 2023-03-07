import { useRef } from 'react';
import './bg-display-button.css';
export default function BgButton({ routeName }) {
  const toggle = useRef(false);
  function displayBg() {
    toggle.current = !toggle.current;
    let nodeList = document.getElementsByClassName(`faded-edge ${routeName.toLowerCase()}`);
    for (let el of nodeList) {
      console.log(toggle.current);
      if (toggle.current) {
        el.classList.add('collapsed');
        document.getElementById('navbar').style.zIndex = -1;
      } else {
        el.classList.remove('collapsed');
        document.getElementById('navbar').style.zIndex = 1;
      }
    }
  }
  return (
    <button
      onClick={() => displayBg()}
      className='bg-display-button bg-translucent pb-xs px-xs imagine-border rounded'
      title='view background image'>
      &#128247;
    </button>
  );
}
