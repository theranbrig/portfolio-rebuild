import { withRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';
import PropTypes from 'prop-types';

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children);
  let className = child.props.className || null;
  if (router.pathname === props.href && props.activeClassName) {
    className = `${className !== null ? className : ''} ${props.activeClassName}`.trim();
  }
  delete props.activeClassName;
  return (
    <Link {...props} prefetch>
      {React.cloneElement(child, { className })}
    </Link>
  );
};

ActiveLink.propTypes = {
  router: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  activeClassName: PropTypes.string,
};

export default withRouter(ActiveLink);
