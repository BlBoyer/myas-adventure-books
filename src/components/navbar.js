export default function Navbar(page) {
  /*need to figure out hr or hardcode elements*/
  const pageList = ['Welcome', 'About', 'Books', 'Illustrator', 'Author'];
  const navlinks = pageList.map((name, ind) => [
    <a href={`/#${name}`} key={ind} class='mx-m py-m imagine-border'>
      {name}
      {name === page ? <hr /> : null}
    </a>,
    <hr style={{ height: '2em' }} />,
  ]);

  return <div class='row align-c imagine-border'>{navlinks}</div>;
}
