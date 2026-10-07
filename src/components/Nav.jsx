const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export default function Nav() {
  return (
    <header className="site-header">
      <nav className="nav-bar" aria-label="Main">
        <a href="#top" className="nav-brand-link">
          Mary Garachu
        </a>
        <div className="nav-actions">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="btn btn-ghost">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-secondary">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
