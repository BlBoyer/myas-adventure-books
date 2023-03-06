import './books.css';
import Header from '../../components/header/header';
import { BooksContent } from './books.content';
export default function Books({ routeInfo }) {
  return (
    <div id='main-div' className='books row'>
      <div className='books col mx-vs my-xl bg-white faded-edge'>
        <Header routeInfo={routeInfo} />
        <BooksContent />
      </div>
    </div>
  );
}
