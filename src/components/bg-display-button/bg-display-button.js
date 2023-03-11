import './bg-display-button.css';
export default function BgButton() {
  function displayBg() {
    document.getElementById('bg-drawing').classList.remove('display-none');
    document.getElementById('router').classList.add('display-none');
    document.getElementById('navbar').style.zIndex = -1;
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
