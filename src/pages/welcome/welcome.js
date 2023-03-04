import Navbar from '../../components/navbar/navbar';
import './welcome.css';

export default function Welcome() {
  return (
    <div id='main-div' className='row'>
      <div className='col mx-vs my-xl bg-white faded-edge'>
        {/*This gets abstracted into the header component*/}
        <div className='row align-c imagine-border'>
          <h1 className='mx-s imagine-border'>Welcome</h1>
          <div>
            <hr className='mx-s vr-xl' />
          </div>
          <Navbar page='Welcome' />
        </div>
        <div className='row mx-vl px-m imagine-border'>
          <div className='col'>
            <div className='row justify-c'>
              <h2>Introduction</h2>
            </div>
            <div className='row justify-c'>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce
                posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis
                urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at,
                vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
