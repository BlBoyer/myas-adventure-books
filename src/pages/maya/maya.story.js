import './maya.css';
import img from './maya.jpg';

export default function MayaStory() {
  return (
    <div className='maya col justify-c'>
      <p>
        The <i>real-life</i> <strong>Maya</strong> presently lives in the war-torn territory of Ukraine. Although these
        adventures are fictional, your larger than life personality has been an inspiration to me! A trust has been set
        up called <em>Maya's Adventures Trust</em> where 50% of the net proceeds of sales for the{' '}
        <s-txt>'Maya's Adventure'</s-txt> book series will go to Maya and her family. <br />
      </p>
      <div>
        <hr />
      </div>
      <div className='maya row img-container mx-reg'>
        <figure>
          <img src={img} alt='The real-life Maya' className='maya img' />
          <figcaption>
            <i>The real-life Maya</i>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
