import NavLinks from './NavLinks';
import NavStyles from './styles/NavStyles';
import PropTypes from 'prop-types';

const Nav = ({ children }) => {
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
