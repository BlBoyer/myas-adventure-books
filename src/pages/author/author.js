import './author.css';
import authorImg from '../../img/author.jpg';
import Header from '../../components/header/header';
import SectionHeader from '../../components/section-header/section-header';

export default function Author({ routeInfo }) {
  return (
    <div id='author' className='author row page-fade'>
      <div className='author col mx-vs my-xl bg-white faded-edge'>
        <Header routeInfo={routeInfo} />
        <SectionHeader routeInfo={routeInfo} />
        <div>
          <hr />
        </div>
        <div className='author row justify-c mt-s'>
          <img src={authorImg} className='author view-width v-40' title='Grant' alt='Grant' />
        </div>
      </div>
    </div>
  );
}
