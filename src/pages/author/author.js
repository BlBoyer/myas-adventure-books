import './author.css';
import Header from '../../components/header/header';
import SectionHeader from '../../components/section-header/section-header';

export default function Author({ routeInfo }) {
  return (
    <div id='author'>
      <Header routeInfo={routeInfo} />
      <SectionHeader routeInfo={routeInfo} />
    </div>
  );
}
