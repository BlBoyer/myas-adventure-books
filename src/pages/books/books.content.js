import BookViewer from '../../components/book-viewer/book-viewer';

export function BooksContent() {
  return (
    <div className='books row justify-c mx-vl px-s'>
      <div className='books col'>
        <BookViewer />
        <div className='books row justify-c'></div>
      </div>
    </div>
  );
}
