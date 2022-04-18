import React, { PureComponent } from 'react';
import Sketch from 'react-p5';
import Header from './header';
import { setup, draw } from './sketch';

class videoFeed extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <h1 className="text-white">Video Feed</h1>
          <Sketch setup={setup} draw={draw} className="App" />
        </div>
      </>
    );
  }
}

export default videoFeed;
