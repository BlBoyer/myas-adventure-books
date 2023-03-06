import './header.css';
import Navbar from '../navbar/navbar';

export default function Header({ routeInfo }) {
  return (
    <div className={`header row align-c collapse-stack`}>
      <h1 className='header mx-xs accent-b black'>{routeInfo[0]}</h1>
      <div>
        <hr className='header mx-xs vr-xl' />
      </div>
      <Navbar routeInfo={routeInfo} />
    </div>
  );
}
