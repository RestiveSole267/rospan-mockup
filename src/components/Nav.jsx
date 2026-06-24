import { NAV_LINKS } from '../data';

export default function Nav({ active, onNav }) {
  return (
    <nav className="rs-nav">
      {NAV_LINKS.map(link => (
        <a
          key={link}
          className={active === link ? 'active' : ''}
          onClick={() => onNav(link)}
        >
          {link}
        </a>
      ))}
    </nav>
  );
}
