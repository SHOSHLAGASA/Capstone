import html from "html-literal";

export default links => html`
  <header class="header">
    <nav class="navbar">
      <a href="/" class="nav-logo" data-navigo>SHANA</a>
      <ul class="nav-menu">
        ${links.map(
          link =>
            `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>
          `
        )}
      </ul>

      <div class="hamburger">
        <div class="dropdown">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>
  </header>
`;
