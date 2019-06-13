import React, { useState } from 'react';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';
import { HamburgerSqueeze } from 'react-animated-burgers';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';
import Link from './Link';
import NavLinks from './NavLinks';
import NavStyles from './styles/NavStyles';

const Nav = ({ children, toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavStyles>
      <OffCanvas width={300} transitionDuration={700} isMenuOpened={isOpen} position="right">
        <OffCanvasBody style={{ fontSize: '30px' }}>
          <div className="navigation">
            <Link href="/">
              <img
                src="https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,w_200/v1551529192/theran-logo.png"
                alt="Theran Brigowatz Logo"
              />
            </Link>
            <div className="desktop-nav-links">
              <NavLinks toggleDarkMode={toggleDarkMode} />
              <Toggle checked={darkMode} onChange={() => toggleDarkMode()} />
            </div>
            <HamburgerSqueeze
              isActive={isOpen}
              toggleButton={() => setIsOpen(!isOpen)}
              barColor="#40a4c8"
              className="hamburger-button"
            />
          </div>
          {children}
        </OffCanvasBody>
        <OffCanvasMenu className="off-menu">
          <div className="nav-links">
            <NavLinks toggleDarkMode={toggleDarkMode} />
          </div>
        </OffCanvasMenu>
      </OffCanvas>
    </NavStyles>
  );
};

Nav.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Nav;
