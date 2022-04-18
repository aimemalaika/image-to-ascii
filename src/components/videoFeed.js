import React, { PureComponent } from 'react';
import Header from './header';

class videoFeed extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <h1>Video Feed</h1>
        </div>
      </>
    );
  }
}

export default videoFeed;
