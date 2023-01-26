import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className='topbar-wrapper'>
      <div className="topbar">
        <div className="left">
          <div className="logo">VBoxM</div>
        </div>
        <div className="right">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TopBar;