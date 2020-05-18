import { OffCanvas, OffCanvasBody, OffCanvasMenu } from 'react-offcanvas';
import React, { useContext, useState } from 'react';

import { DarkContext } from './context/DarkContext';
import { HamburgerSqueeze } from 'react-animated-burgers';
import Link from './Link';
import NavLinks from './NavLinks';
import NavStyles from './styles/NavStyles';
import PropTypes from 'prop-types';

const Nav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useContext(DarkContext);
  return (
    <NavStyles>
      {children}
      <div className='navigation'>
        <NavLinks />
      </div>
    </NavStyles>
  );
};

Nav.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Nav;
