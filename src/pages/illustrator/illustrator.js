import './illustrator.css';
import Header from '../../components/header/header';
import SectionHeader from '../../components/section-header/section-header';

export default function Illustrator({ routeInfo }) {
  return (
    <div id='illustrator' className='col'>
      <Header routeInfo={routeInfo} />
      <SectionHeader routeInfo={routeInfo} />
    </div>
  );
}
