import Toggle from 'react-toggle';
import React, { useContext } from 'react';
import Link from './Link';
import { DarkContext } from './context/DarkContext';

const NavLinks = ({ toggleDarkMode }) => {
  const { darkMode } = useContext(DarkContext);
  return (
    <>
      <Link activeClassName="active" href="/">
        <a>Home</a>
      </Link>
      <Link activeClassName="active" href="/portfolio">
        <a>Portfolio</a>
      </Link>
      <Link activeClassName="active" href="/about">
        <a> About Me</a>
      </Link>
      <Link activeClassName="active" href="/contact">
        <a>Contact</a>
      </Link>
      <Toggle
        checked={darkMode}
        onChange={() => toggleDarkMode()}
        icons={{
          checked: <i className="far fa-lightbulb"></i>,
          unchecked: <i className="fas fa-lightbulb"></i>,
        }}
      />
    </>
  );
};
export default NavLinks;
