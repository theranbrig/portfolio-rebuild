import Link from './Link';
import React from 'react';

const NavLinks = () => {
  return (
    <>
      <Link activeClassName='active' href='/'>
        <a>Home</a>
      </Link>
      <Link activeClassName='active' href='/portfolio'>
        <a>Portfolio</a>
      </Link>
      <Link activeClassName='active' href='/about'>
        <a> About Me</a>
      </Link>
      <Link activeClassName='active' href='/contact'>
        <a>Contact</a>
      </Link>
    </>
  );
};
export default NavLinks;
