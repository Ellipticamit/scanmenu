import React from 'react';
import Sticky from 'react-sticky-el';

function MySticky(props) {
  return (
    <div className='block'>
      <Sticky
        boundaryElement='.block'
        style={{position: 'relative'}}
        hideOnBoundaryHit={false}
      >
        <div>
          asfdasdfdsf
          <h2>asdfasdfsdf</h2>
          <p>asdfsadfasdf asdfasdfasdfsf asdfasdfasdf</p>
          <br />
          <p>asdfsadf asdfasdf asdfsdf asdfasdf sadf sdf s dfsdf</p>
        </div>
      </Sticky>
    </div>
  );
}

export default MySticky;
