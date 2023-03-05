import Header from '../../components/header/header';
import './welcome.css';

export default function Welcome({ routeInfo }) {
  return (
    <div id='main-div' className='welcome row'>
      <div className='welcome col mx-vs my-xl bg-white faded-edge'>
        <Header routeInfo={routeInfo} />
        <div className='welcome row mx-vl px-m'>
          <div className='welcome col'>
            <div className='welcome row justify-c'>
              <div className='welcome col fit min-width'>
                <h2 className='mb-a'>Introduction</h2>
                <p className='row justify-c mt-a'>&#10570; &#10571;</p>
              </div>
            </div>
            <div className='welcome row justify-c'>
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
