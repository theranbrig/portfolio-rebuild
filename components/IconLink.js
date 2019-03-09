import PropTypes from 'prop-types';

const IconLink = ({ link, icon, name }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    {name}
    <i className={icon} />
  </a>
);

IconLink.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default IconLink;
