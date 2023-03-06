import { lazy, Suspense } from 'react';
export default function SectionHeader({ routeInfo }) {
  const page = routeInfo[0];
  const name = page.toLowerCase();
  const about = page === 'Author' || page === 'Illustrator' ? 'About the ' : '';
  const Paragraph = lazy(() => import(`../../pages/${name}/${name}.story`));
  return (
    <div className={`${name} row mx-vm px-m`}>
      <div className={`${name} col`}>
        <div className={`${name} row justify-c`}>
          <div className={`${name} col fit min-width`}>
            <h2 className='mb-a basic-txt-shade'>
              {about}
              {page}
            </h2>
            <p className='row justify-c mt-a'>&#10570; &#10571;</p>
          </div>
        </div>
        <div className={`${name} row justify-c`}>
          <Suspense>
            <Paragraph />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
