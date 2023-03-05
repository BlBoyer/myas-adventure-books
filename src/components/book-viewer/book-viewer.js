import bookArt1 from './bookArt1.jpg';
import bookArt2 from './bookArt2.jpg';
import bookArt3 from './bookArt3.jpg';
import bookArt4 from './bookArt4.jpg';
import bookArt5 from './bookArt5.jpg';
import bookArt6 from './bookArt6.jpg';
import bookArt7 from './bookArt7.jpg';
import bookArt8 from './bookArt8.jpg';
import bookArt9 from './bookArt9.jpg';
import bookArt10 from './bookArt10.jpg';
import bookArt11 from './bookArt11.jpg';
import bookArt12 from './bookArt12.jpg';
import bookArt13 from './bookArt13.jpg';
import bookArt14 from './bookArt14.jpg';
import './book-viewer.css';
import { useState, useRef } from 'react';

export default function BookViewer() {
  //start on random image
  //have an over button(swipe) for next
  const [bookIndex, setBook] = useState(0);
  const bookImages = [
    bookArt1,
    bookArt2,
    bookArt3,
    bookArt4,
    bookArt5,
    bookArt6,
    bookArt7,
    bookArt8,
    bookArt9,
    bookArt10,
    bookArt11,
    bookArt12,
    bookArt13,
    bookArt14,
  ];
  function changeBook(direction) {
    if (direction === 'right' && bookIndex < bookImages.length - 1) {
      setBook(bookIndex => bookIndex + 1);
    }
    if (direction === 'left' && bookIndex > 0) {
      setBook(bookIndex => bookIndex - 1);
    }
  }
  return (
    <div className='book-viewer col align-c'>
      <div className='book-viewer row justify-c fit max-width bg-gray-4 faded-edge'>
        <button
          onClick={() => changeBook('left')}
          className='book-viewer fit min-width min-height my-a txt-xl bg-translucent'>
          <text className='book-viewer left-arrow txt-align-r'>&#10148;</text>
        </button>
        <img src={bookImages[bookIndex]} alt='Book Art' className='book-viewer auto-height' />
        <button
          onClick={() => changeBook('right')}
          className='book-viewer fit min-width min-height my-a txt-xl bg-translucent'>
          <text className='book-viewer'>&#10148;</text>
        </button>
      </div>
    </div>
  );
}