import Link from './Link';

const NavLinks = () => (
  <>
    <Link activeClassName="active" href="/" prefetch>
      <a>Home</a>
    </Link>
    <Link activeClassName="active" href="/portfolio" prefetch>
      <a>Portfolio</a>
    </Link>
    <Link activeClassName="active" href="/about" prefetch>
      <a> About</a>
    </Link>
    <Link activeClassName="active" href="/contact" prefetch>
      <a>Contact</a>
    </Link>
  </>
);

export default NavLinks;
