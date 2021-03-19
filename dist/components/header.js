class Header extends HTMLElement {
  constructor(){
  super();
}


connectedCallback(){
this.innerHTML = `
<header>
<div class="navbar-fixed">
    <nav class="nav-center" role="navigation" id="header">
      <div class="nav-wrapper container">
        <a href="https://beyondthegravemusic.com">BEYOND THE GRAVE</a>

        <ul class="right hide-on-med-and-down">
          <li> <a href="index.html">All</a></li>
          <li><a href="deathmetal.html">Death Metal</a></li>
          <li><a href="blackmetal.html">Black Metal</a></li>
          <li><a href="metal.html">Metal</a></li>
          <li><a href="deathcore.html">Deathcore</a></li>
          <li><a href="metalcore.html">Metalcore</a></li>
         
         

        </ul>

        <ul id="nav-mobile" class="sidenav black center">
          <a href="https://beyondthegravemusic.com">BEYOND THE GRAVE</a>
          <a href="index.html">All</a>
          <li><a href="deathmetal.html" class="white-text">Death Metal</a></li>
          <li><a href="blackmetal.html" class="white-text">Black Metal</a></li>
          <li><a href="metal.html" class="white-text">Metal</a></li>
          <li><a href="deathcore.html" class="white-text">Deathcore</a></li>    
          <li><a href="metalcore.html" class="white-text">Metalcore</a></li>
        </ul>
        <a href="#" data-target="nav-mobile" class="sidenav-trigger header_toggle">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </nav>
  </div>
</header>
`;

}
}

customElements.define('header-component', Header);