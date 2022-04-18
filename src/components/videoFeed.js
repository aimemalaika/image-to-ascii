import Sketch from 'react-p5';
import Header from './header';
import { setup, draw } from './sketch';

const videoFeed = () => (
  <>
    <Header />
    <div className="container">
      <h1 className="text-white">Video Feed</h1>
      <Sketch setup={setup} draw={draw} />
    </div>
  </>
);

export default videoFeed;
