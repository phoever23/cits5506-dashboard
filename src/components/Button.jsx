import React from 'react';
import './button.css';

function Button() {
  return (
    <nav className='header-nav ms-auto d-flex align-items-center'>
            {/* microphone connection */}
            <i className='bi bi-mic-fill icon'></i>
            {/* user login in */}
            <i className="bi bi-person-fill-gear icon"></i>
            <span>Login in</span>     
    </nav>
  )
}

export default Button