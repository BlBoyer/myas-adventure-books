import Navbar from '../navbar/navbar';

export default function Header({ routeInfo }) {
  return (
    <div className='row align-c imagine-border'>
      <h1 className='mx-s imagine-border'>{routeInfo[0]}</h1>
      <div>
        <hr className='mx-s vr-xl' />
      </div>
      <Navbar routeInfo={routeInfo} />
    </div>
  );
}
