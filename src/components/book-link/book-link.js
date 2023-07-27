export default function BookLink({ book }) {
  const langs = {
    eng: 'English',
    deu: 'Deutsche',
    esp: 'Español',
    ukr: 'Українська',
    zho: 'Zhōng Wén',
  };
  return (
    <div class='book-link'>
      {book['urls'].map(function (urlObj, ind) {
        return (
          <a
            href={Object.entries(urlObj)[0][1]}
            title={langs[Object.entries(urlObj)[0][0]]}
            className='book-link mr-xs'
            key={ind}>
            {Object.entries(urlObj)[0][0]}
          </a>
        );
      })}
    </div>
  );
}