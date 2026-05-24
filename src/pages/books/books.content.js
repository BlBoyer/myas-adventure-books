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
        <div>
          <hr />
        </div>
        <div className="books row justify-c align-c w-100 my-2">
          <span className='mt-xs mr-xs'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="goldenrod" class="icon icon-tabler icons-tabler-filled icon-tabler-alert-square-rounded">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 2l.642 .005l.616 .017l.299 .013l.579 .034l.553 .046c4.687 .455 6.65 2.333 7.166 6.906l.03 .29l.046 .553l.041 .727l.006 .15l.017 .617l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.455 4.687 -2.333 6.65 -6.906 7.166l-.29 .03l-.553 .046l-.727 .041l-.15 .006l-.617 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.687 -.455 -6.65 -2.333 -7.166 -6.906l-.03 -.29l-.046 -.553l-.041 -.727l-.006 -.15l-.017 -.617l-.004 -.318v-.648l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.455 -4.687 2.333 -6.65 6.906 -7.166l.29 -.03l.553 -.046l.727 -.041l.15 -.006l.617 -.017c.21 -.003 .424 -.005 .642 -.005zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
            </svg>
          </span>
          <span><em>Russian and Ukranian translations are currently being reworked.</em></span>
        </div>
        <h2>See the books on Amazon</h2>
        <div className='books col ml-vxs'>
          {books['books'].map((book, ind) => (
            <div className='books row justify-s align-c'>
              <p className='books'>
                <strong>{book.name}</strong>
              </p>
              <p className='mt-xs mx-s'>....</p>
              <BookLink book={book} key={ind} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
