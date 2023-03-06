import Header from '../../components/header/header';
import SectionHeader from '../../components/section-header/section-header';
import './welcome.css';

export default function Welcome({ routeInfo }) {
  return (
    <div id='main-div' className='welcome row'>
      <div className='welcome col mx-vs my-xl bg-white faded-edge'>
        <Header routeInfo={routeInfo} />
        <SectionHeader routeInfo={routeInfo} />
      </div>
    </div>
  );
}
