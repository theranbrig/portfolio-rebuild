import PropTypes from 'prop-types';
import FooterStyles from './styles/FooterStyles';
import Link from './Link';

const Footer = ({ darkMode }) => (
  <FooterStyles>
    <div className="footer-left">
      <img
        src={
          darkMode
            ? 'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,w_200/v1551529192/theran-logo.png'
            : 'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,w_200/v1551529192/theran-logo-Original-dark.png'
        }
        alt="Theran Brigowatz Logo"
      />
      <div className="footer-nav-links">
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
      </div>
    </div>
    <div className="footer-right">
      <p>
        <span>*</span> I am an American living in the good Korea, but open to work around the world and free of time
        zones.
      </p>
      <p>Thanks for visiting the bottom of the page.</p>
    </div>
  </FooterStyles>
);

Footer.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Footer;
