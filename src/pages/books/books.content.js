import BookViewer from '../../components/book-viewer/book-viewer';

export function BooksContent() {
  return (
    <div className='books row justify-c mx-vl px-m imagine-border'>
      <div className='books col'>
        <div className='books row justify-c'>
          <h2>Books</h2>
        </div>
        <BookViewer />
        <div className='books row justify-c'></div>
      </div>
    </div>
  );
}
