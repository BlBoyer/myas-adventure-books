import Header from '../../components/header/header';
import IllustratorStory from './illustrator.story';

export default function Illustrator({ routeInfo }) {
  return (
    <div id='illustrator' className='col'>
      <Header routeInfo={routeInfo} />
      <IllustratorStory />
    </div>
  );
}
