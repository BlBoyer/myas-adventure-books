import './books.css';
import Header from '../../components/header/header';
import { BooksContent } from './books.content';

export default function Books({ routeInfo }) {
  return (
    <div id='books' className='books row page-fade'>
      <div className='books col mx-vs my-xl bg-white faded-edge'>
        <Header routeInfo={routeInfo} />
        <BooksContent />
      </div>
    </div>
  );
}
