import './illustrator.css';
import Header from '../../components/header/header';
import SectionHeader from '../../components/section-header/section-header';

export default function Illustrator({ routeInfo }) {
  return (
    <div id='main-div' className='illustrator row'>
      <div className='welcome col mx-vs my-xl bg-white faded-edge'>
        <Header routeInfo={routeInfo} />
        <SectionHeader routeInfo={routeInfo} />
      </div>
    </div>
  );
}
