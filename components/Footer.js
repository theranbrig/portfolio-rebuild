import styled from 'styled-components';
import NavLinks from './NavLinks';

const FooterStyles = styled.div`
  border-top: 3px solid ${props => props.theme.blue};
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background-color: ${props => props.theme.darkBlack};
  img {
    height: 40px;
  }
  .footer-left {
    display: grid;
    grid-template-rows: 1fr 20px;
    grid-template-columns: 300px;
    .footer-nav-links {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
      align-items: center;
    }
  }
`;

const Footer = () => (
  <FooterStyles>
    <div className="footer-left">
      <img
        src="https://res.cloudinary.com/dq7uyauun/image/upload/v1551529192/theran-logo.png"
        alt="Theran Brigowatz Logo"
      />
      <div className="footer-nav-links">
        <NavLinks />
      </div>
    </div>
    <div className="footer-right">
      <p>* I am an American living in the good Korea, but open to work around the world and free of time zones.</p>
      <p>Thanks for visiting the bottom of the page.</p>
    </div>
  </FooterStyles>
);

export default Footer;
