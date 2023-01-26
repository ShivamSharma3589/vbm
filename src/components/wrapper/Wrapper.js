import React from 'react';
import './Wrapper.css';

const Wrapper = (props) => {
  return (
    <div className='main-wrapper'>{props.children}</div>
  );
}

export default Wrapper;