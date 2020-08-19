import PropTypes from 'prop-types';

const IconLink = ({ link, icon, name, alt }) => (
  <a href={link} target='_blank' rel='noopener noreferrer' aria-label={name}>
    <img src={`icons/${icon}.svg`} alt={alt} />
  </a>
);

IconLink.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default IconLink;
