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
      </div>

      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>

    <!-- <div class="dropdown">
      <button class="dropbtn">Dropdown</button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div> -->
  </header>
`;
