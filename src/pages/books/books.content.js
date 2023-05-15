import BookLink from '../../components/book-link/book-link';
import BookViewer from '../../components/book-viewer/book-viewer';

export function BooksContent() {
  const books = require('../../data/book-data.json');
  return (
    <div className='books row justify-c mx-vl px-s'>
      <div className='books col'>
        <BookViewer />
        <div>
          <hr className='mt-l' />
        </div>
        <div className='books row justify-c'>
          <p>
            Maya is a three-year old Eastern European girl with a big personality. She moves to Rigglesnortville, USA
            with her mom, who she affectionately calls Mamochka and her older sister, Mira. Maya meets and befriends
            Hatty and Barty, who also live in Rigglesnortville, and she is first introduced in the{' '}
            <a href='https://www.amazon.com/dp/B0BTGFK7B9'>
              <s-txt>Hatty and Barty Adventures Month Eight</s-txt>
            </a>{' '}
            book.
          </p>
        </div>
        <div className='books row justify-c imagine-border'>
          {books['books'].map((book, ind) => [
            <p>{book.name}</p>,
            <div>
              <BookLink book={book} key={ind} />
            </div>,
          ])}
        </div>
      </div>
    </div>
  );
}
