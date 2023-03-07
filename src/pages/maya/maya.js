import './maya.css';
import Header from '../../components/header/header';
import SectionHeader from '../../components/section-header/section-header';

export default function Maya({ routeInfo }) {
  return (
    <div id='main-div' className='maya row'>
      <div className='maya col mx-vs my-xl bg-white faded-edge'>
        <Header routeInfo={routeInfo} />
        <SectionHeader routeInfo={routeInfo} />
      </div>
    </div>
  );
}
