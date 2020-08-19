import Link from './Link';
import React from 'react';

const NavLinks = () => {
  return (
    <>
      <Link activeClassName='active' href='/'>
        <a>Home</a>
      </Link>
      <Link activeClassName='active' href='/blog'>
        <a>Blog</a>
      </Link>
      <Link activeClassName='active' href='/portfolio'>
        <a>Work</a>
      </Link>
      <Link activeClassName='active' href='/about'>
        <a> About</a>
      </Link>
      <Link activeClassName='active' href='/contact'>
        <a>Contact</a>
      </Link>
    </>
  );
};
export default NavLinks;
