import PropTypes from 'prop-types';

const ContactLink = ({ link, icon, name }) => (
  <a href={link} target='_blank' rel='noopener noreferrer' aria-label={name}>
    <i className={icon} />
    <p>{name}</p>
  </a>
);

ContactLink.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ContactLink;
