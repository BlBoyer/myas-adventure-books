import Header from '../../components/header/header';
import { BooksContent } from './books.content';
//import book component above books content or within it
export default function Books({ routeInfo }) {
  return (
    <div id='about'>
      <Header routeInfo={routeInfo} />
      <BooksContent />
    </div>
  );
}
