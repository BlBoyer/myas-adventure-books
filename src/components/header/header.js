import './header.css';
import Navbar from '../navbar/navbar';

export default function Header({ routeInfo }) {
  return (
    <div className={`header row align-c collapse-stack imagine-border`}>
      <h1 className='header mx-s'>{routeInfo[0]}</h1>
      <div>
        <hr className='header mx-s vr-xl' />
      </div>
      <Navbar routeInfo={routeInfo} />
    </div>
  );
}
