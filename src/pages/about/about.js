import './about.css';
import Header from '../../components/header/header';
import { AboutStory } from './about.story';

export default function About({ routeInfo }) {
  return (
    <div id='about'>
      <Header routeInfo={routeInfo} />
      <AboutStory />
    </div>
  );
}
