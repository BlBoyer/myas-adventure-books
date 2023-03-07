import './maya.css';
import BgButton from '../../components/bg-display-button/bg-display-button';
import Header from '../../components/header/header';
import SectionHeader from '../../components/section-header/section-header';

export default function Maya({ routeInfo }) {
  return (
    <div id='maya' className='maya row'>
      <BgButton routeName={routeInfo[0]} />
      <div className='maya col mx-vs my-xl bg-white faded-edge'>
        <Header routeInfo={routeInfo} />
        <SectionHeader routeInfo={routeInfo} />
      </div>
    </div>
  );
}
