export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-shell">
        <div>
          <div className="footer-title">Liuli Society of America</div>
          <p className="footer-text">
            Liuli Society of America is a U.S. nonprofit organization dedicated to
            ecological awareness, research-informed wellness education, community-centered
            initiatives, and a more responsible relationship between people and the natural world.
          </p>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4>Explore</h4>
            <a href="#/about">About</a>
            <a href="#/approach">Approach</a>
            <a href="#/pathways">Pathways</a>
            <a href="#/research">Research</a>
          </div>
          <div className="footer-col">
            <h4>Engage</h4>
            <a href="#/community">Community</a>
            <a href="#/support">Support</a>
            <a href="#/contact">Contact</a>
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© 2026 Liuli Society of America</span>
        <span>Registered U.S. nonprofit organization</span>
        <span>Nature-conscious. Education-centered. Community-focused.</span>
      </div>
    </footer>
  )
}
