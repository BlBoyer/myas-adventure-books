import './welcome.css';
import BgButton from '../../components/bg-display-button/bg-display-button';
import Header from '../../components/header/header';
import SectionHeader from '../../components/section-header/section-header';

export default function Welcome({ routeInfo }) {
  return (
    <div id='welcome' className='welcome row page-fade'>
      <BgButton routeName={routeInfo[0]} />
      <div className='welcome col mx-vs my-xl bg-white faded-edge'>
        <Header routeInfo={routeInfo} />
        <SectionHeader routeInfo={routeInfo} />
      </div>
    </div>
  );
}
