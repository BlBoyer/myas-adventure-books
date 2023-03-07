import './illustrator.css';
import illustratorImg from '../../img/illustrator.jpg';
import BgButton from '../../components/bg-display-button/bg-display-button';
import Header from '../../components/header/header';
import SectionHeader from '../../components/section-header/section-header';

export default function Illustrator({ routeInfo }) {
  return (
    <div id='illustrator' className='illustrator row page-fade'>
      <BgButton routeName={routeInfo[0]} />
      <div className='illustrator col mx-vs my-xl bg-white faded-edge'>
        <Header routeInfo={routeInfo} />
        <SectionHeader routeInfo={routeInfo} />
        <div>
          <hr />
        </div>
        <div className='illustrator row justify-c mt-s'>
          <img src={illustratorImg} className='illustrator view-width v-40' title='Aleksandra' alt='Aleksandra' />
        </div>
      </div>
    </div>
  );
}
