import './bg-display-img.css';
import bgImg from '../../img/welcome-bg.jpg';
export default function BgImg() {
  function closeImg() {
    document.getElementById('bg-drawing').classList.add('display-none');
    document.getElementById('router').classList.remove('display-none');
    document.getElementById('navbar').style.zIndex = 1;
  }
  return (
    <div className='bg-display-img col justify-c align-c view-width view-height v-100 bg-black'>
      <div className='bg-display-img fit min-width max-width'>
        <button onClick={() => closeImg()} className='bg-display-img circular white'>
          X
        </button>
        <img src={bgImg} className='bg-display-img' alt='background drawing' title={`Maya's Adevntures`} />
        <div className='smallImg px-l'>
          Your screen is too small to view this image. Zoom out or view on a larger device.
        </div>
      </div>
    </div>
  );
}
