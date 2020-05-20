import PropTypes from 'prop-types';

const IconLink = ({ link, icon, name }) => (
  <a href={link} target='_blank' rel='noopener noreferrer' aria-label={name} rel='preload'>
    <img src={`../static/icons/${icon}.svg`} alt={icon} />
  </a>
);

IconLink.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default IconLink;
