import './illustrator.css';
import illustratorImg from '../../img/illustrator.jpg';
import Header from '../../components/header/header';
import SectionHeader from '../../components/section-header/section-header';

export default function Illustrator({ routeInfo }) {
  return (
    <div id='main-div' className='illustrator row'>
      <div className='illustrator col mx-vs my-xl bg-white faded-edge'>
        <Header routeInfo={routeInfo} />
        <SectionHeader routeInfo={routeInfo} />
        <div>
          <hr />
        </div>
        <div class='illustrator row justify-c mt-s'>
          <img src={illustratorImg} className='illustrator view-width v-40' />
        </div>
      </div>
    </div>
  );
}
