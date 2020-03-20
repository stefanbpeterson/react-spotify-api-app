import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
  return (
    <div className='overflowScroll' style={{ overflowY: 'scroll', height: '80vh' }}>
      { props.children }
    </div>
  )
}

export default Scroll;
