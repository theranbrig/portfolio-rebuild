import styled from 'styled-components';

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
    grid-template-columns: 1fr 1fr 1fr 1fr 40px;
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
  /* Toggle */
  .react-toggle {
    touch-action: pan-x;

    display: inline-block;
    position: relative;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }

  .react-toggle-screenreader-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .react-toggle--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    -webkit-transition: opacity 0.25s;
    transition: opacity 0.25s;
  }

  .react-toggle-track {
    width: 50px;
    height: 24px;
    padding: 0;
    border-radius: 30px;
    background-color: #4d4d4d;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: #000000;
  }

  .react-toggle--checked .react-toggle-track {
    background-color: ${props => props.theme.blue};
  }

  .react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: ${props => props.theme.blue};
  }

  .react-toggle-track-check {
    position: absolute;
    width: 14px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    left: 8px;
    opacity: 0;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-check {
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle-track-x {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    right: 10px;
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-x {
    opacity: 0;
  }

  .react-toggle-thumb {
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border: 1px solid #4d4d4d;
    border-radius: 50%;
    background-color: #fafafa;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    -webkit-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }

  .react-toggle--checked .react-toggle-thumb {
    left: 27px;
    border-color: ${props => props.theme.blue};
  }

  .react-toggle--focus .react-toggle-thumb {
    -webkit-box-shadow: 0px 0px 3px 2px #0099e0;
    -moz-box-shadow: 0px 0px 3px 2px #0099e0;
    box-shadow: 0px 0px 2px 3px #0099e0;
  }

  .react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
    -webkit-box-shadow: 0px 0px 5px 5px #0099e0;
    -moz-box-shadow: 0px 0px 5px 5px #0099e0;
    box-shadow: 0px 0px 5px 5px #0099e0;
  }
`;

export default NavStyles;
