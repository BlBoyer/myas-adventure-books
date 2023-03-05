import './about.css';
import Header from '../../components/header/header';
import SectionHeader from '../../components/section-header/section-header';

export default function About({ routeInfo }) {
  return (
    <div id='about'>
      <Header routeInfo={routeInfo} />
      <SectionHeader routeInfo={routeInfo} />
    </div>
  );
}
