import Link from './Link';

const NavLinks = () => (
  <>
    <Link activeClassName="active" href="/">
      <a>Home</a>
    </Link>
    <Link activeClassName="active" href="/portfolio">
      <a>Portfolio</a>
    </Link>
    <Link activeClassName="active" href="/about">
      <a> About</a>
    </Link>
    <Link activeClassName="active" href="/contact">
      <a>Contact</a>
    </Link>
  </>
);

export default NavLinks;
