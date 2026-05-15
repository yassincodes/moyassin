export default function SiteNav({ active = "gallery" }) {
  return (
    <header className="site-nav">
      <a href="/" className="site-nav-brand">
        Mohammed Yassin
      </a>
      <ul className="site-nav-links">
        {active !== "gallery" && (
          <li>
            <a href="/">Work</a>
          </li>
        )}
        {active !== "about" && (
          <li>
            <a href="/about">About</a>
          </li>
        )}
      </ul>
    </header>
  );
}
