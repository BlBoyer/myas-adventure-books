import './author.css';
import Header from '../../components/header/header';
import AuthorStory from './author.story';

export default function Author({ routeInfo }) {
  return (
    <div id='author'>
      <Header routeInfo={routeInfo} />
      <AuthorStory />
    </div>
  );
}
