import html from "html-literal";

export default links => html`
  <header class="header">
    <nav class="navbar">
      <a href="/" class="nav-logo" data-navigo="$1">SHANA</a>
      <ul class="nav-menu">
        ${links.map(
          link =>
            `<li class="nav-item"><a href="/${link.title}" class="nav-link" title="${link.title}" data-navigo>${link.text}</a></li>`
        )}
      </ul>
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  </header>
`;
