import React from 'react';
import './header.css';
import Logo from './Logo';
import Button from './Button';

function Header() {
  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
    {/* {logo} */}
    <Logo />
    {/* {mic and login in button} */}
    <Button />
    </header>
  )
}

export default Header