import React, { useState } from 'react';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';
import { HamburgerStand } from 'react-animated-burgers';
import styled from 'styled-components';
import Link from './Link';
import NavLinks from './NavLinks';

const NavStyles = styled.div`
  .navigation {
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.darkBlack};
    padding: 10px;
    img {
      height: 40px;
      width: auto;
      margin: 10px;
    }
    border-bottom: 3px solid ${props => props.theme.blue};
  }
  .hamburger-button {
    @media (min-width: 900px) {
      display: none;
    }
  }
  .hamburger-button:focus {
    outline: none;
  }
  .off-menu {
    height: 100%;
    padding: 20px;
    border-left: 3px solid ${props => props.theme.blue};
    background-color: ${props => props.theme.black};
  }
  .nav-links {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    align-items: center;
    justify-items: center;
    grid-gap: 30px;

    a {
      font-size: 2rem;
      color: ${props => props.theme.blue};
      border-bottom: transparent 3px solid;
      padding-bottom: 15px;
      font-family: ${props => props.theme.raleFont};
      &:hover {
        border-bottom: ${props => props.theme.white} 3px solid;
      }
    }
    .active {
      color: ${props => props.theme.white};
    }
  }
  .desktop-nav-links {
    height: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-items: center;
    grid-gap: 20px;
    height: 60px;
    @media (max-width: 900px) {
      display: none;
    }
    a {
      color: ${props => props.theme.blue};
      font-size: 1.5rem;
      font-family: ${props => props.theme.raleFont};
      border-bottom: transparent 3px solid;
      padding-bottom: 5px;
      &:hover {
        border-bottom: ${props => props.theme.white} 3px solid;
      }
    }
    .active {
      color: ${props => props.theme.white};
    }
  }
`;

const Nav = props => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavStyles>
      <OffCanvas width={300} transitionDuration={300} isMenuOpened={isOpen} position="right">
        <OffCanvasBody style={{ fontSize: '30px' }}>
          <div className="navigation">
            <Link href="/">
              <img
                src="https://res.cloudinary.com/dq7uyauun/image/upload/v1551529192/theran-logo.png"
                alt="Theran Brigowatz Logo"
              />
            </Link>
            <div className="desktop-nav-links">
              <NavLinks />
            </div>
            <HamburgerStand
              isActive={isOpen}
              toggleButton={() => setIsOpen(!isOpen)}
              barColor="#40a4c8"
              className="hamburger-button"
            />
          </div>
          {props.children}
        </OffCanvasBody>
        <OffCanvasMenu className="off-menu">
          <div className="nav-links">
            <NavLinks />
          </div>
        </OffCanvasMenu>
      </OffCanvas>
    </NavStyles>
  );
};

export default Nav;
