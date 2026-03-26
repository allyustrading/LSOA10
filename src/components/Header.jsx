const navItems = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Approach', 'approach'],
  ['Pathways', 'pathways'],
  ['Research', 'research'],
  ['Community', 'community'],
  ['Support', 'support'],
  ['Contact', 'contact'],
]

export default function Header({ route }) {
  return (
    <header className="header">
      <div className="shell header-shell">
        <a href="#/home" className="brand">
          <div className="brand-title">Liuli Society of America</div>
          <div className="brand-sub">Nature protection, ecological awareness, and community-centered wellbeing</div>
        </a>

        <nav className="nav">
          {navItems.map(([label, key]) => (
            <a key={key} href={`#/${key}`} className={route === key ? 'nav-link active' : 'nav-link'}>
              {label}
            </a>
          ))}
        </nav>

        <a href="#/contact" className="button button-gold">Connect</a>
      </div>
    </header>
  )
}
