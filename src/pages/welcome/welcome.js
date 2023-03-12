import './welcome.css';
import banner from '../../img/banner.webp';
import Header from '../../components/header/header';
import SectionHeader from '../../components/section-header/section-header';

export default function Welcome({ routeInfo }) {
  return (
    <div id='welcome' className='welcome row page-fade'>
      <div className='welcome col mx-vs my-xl bg-white faded-edge'>
        <Header routeInfo={routeInfo} />
        <div className='welcome row justify-c my-l'>
          <img src={banner} className='welcome view-width v-65 shaded-black' />
        </div>
        <SectionHeader routeInfo={routeInfo} />
      </div>
    </div>
  );
}
