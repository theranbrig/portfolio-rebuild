import React, { useContext } from 'react';

import { DarkContext } from './context/DarkContext';
import Link from './Link';
import Toggle from 'react-toggle';

const NavLinks = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkContext);
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
