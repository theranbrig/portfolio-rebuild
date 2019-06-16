import NavLinks from './NavLinks';
import FooterStyles from './styles/FooterStyles';

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
        <NavLinks />
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

export default Footer;
