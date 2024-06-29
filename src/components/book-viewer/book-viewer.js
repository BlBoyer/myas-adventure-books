import './book-viewer.css';
import { useState } from 'react';

const art1 = new Image();
art1.src = require('./cover1.jpg');
const art2 = new Image();
art2.src = require('./cover2.jpg');
const art3 = new Image();
art3.src = require('./cover3.jpg');
const art4 = new Image();
art4.src = require('./bookArt1.jpg');
const art5 = new Image();
art5.src = require('./bookArt2.jpg');
const art6 = new Image();
art6.src = require('./bookArt3.jpg');
const art7 = new Image();
art7.src = require('./bookArt4.jpg');
const art8 = new Image();
art8.src = require('./bookArt5.jpg');
const art9 = new Image();
art9.src = require('./bookArt6.jpg');
const art10 = new Image();
art10.src = require('./bookArt7.jpg');
const art11 = new Image();
art11.src = require('./bookArt8.jpg');
const art12 = new Image();
art12.src = require('./bookArt9.jpg');
const art13 = new Image();
art13.src = require('./bookArt10.jpg');
const art14 = new Image();
art14.src = require('./bookArt11.jpg');
const art15 = new Image();
art15.src = require('./bookArt12.jpg');
const art16 = new Image();
art16.src = require('./bookArt13.jpg');
const art17 = new Image();
art17.src = require('./bookArt14.jpg');
const art18 = new Image();
art18.src = require('./bookArt15.jpg');
const art19 = new Image();
art19.src = require('./bookArt16.jpg');
const art20 = new Image();
art20.src = require('./bookArt17.jpg');
const art21 = new Image();
art21.src = require('./bookArt18.jpg');

export default function BookViewer() {
  //start on random image
  //have an over button(swipe) for next
  const [bookIndex, setBook] = useState(0);
  const bookImages = [
    art1,
    art2,
    art3,
    art4,
    art5,
    art6,
    art7,
    art8,
    art9,
    art10,
    art11,
    art12,
    art13,
    art14,
    art15,
    art16,
    art17,
    art18,
    art19,
    art20,
    art21,
  ];
  function changeBook(direction) {
    if (direction === 'right') {
      if (bookIndex === bookImages.length - 1) {
        setBook(0);
      } else {
        setBook(bookIndex => bookIndex + 1);
      }
    }
    if (direction === 'left') {
      if (bookIndex === 0) {
        setBook(bookImages.length - 1);
      } else {
        setBook(bookIndex => bookIndex - 1);
      }
    }
  }
  return (
    <div className='col align-c'>
      <div className='book-viewer main row justify-c view-width v-30 bg-gray-4 faded-edge'>
        <button
          onClick={() => changeBook('left')}
          className='book-viewer my-a txt-xl bg-translucent gray-4 button-glow'>
          <text className='book-viewer flip-x txt-align-r'>&#10148;</text>
        </button>
        <img src={bookImages[bookIndex].src} alt='Book Art' className='book-viewer view-width v-30 auto-height' />
        <button
          onClick={() => changeBook('right')}
          className='book-viewer my-a txt-xl bg-translucent gray-4 button-glow'>
          <text className='book-viewer'>&#10148;</text>
        </button>
      </div>
    </div>
  );
}
