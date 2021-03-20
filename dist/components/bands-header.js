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
          <li> <a href="../index.html">Introducing</a></li>
          <li><a href="deathmetal.html">Interviews</a></li>
          <li><a href="metal.html">Reviews</a></li>
          <li><a href="blackmetal.html">News</a></li>
          <li><a href="deathcore.html">Submit</a></li>
          <li><a href="metalcore.html">About</a></li>
         
         

        </ul>

        <ul id="nav-mobile" class="sidenav black center">
          <a href="https://beyondthegravemusic.com">BEYOND THE GRAVE</a>
          <a href="index.html">All</a>
          <li><a href="deathmetal.html" class="white-text">Introducing</a></li>
          <li><a href="blackmetal.html" class="white-text">Interviews</a></li>
          <li><a href="metal.html" class="white-text">Reviews</a></li>
          <li><a href="deathcore.html" class="white-text">News</a></li>    
          <li><a href="metalcore.html" class="white-text">Submit</a></li>
          <li><a href="metalcore.html" class="white-text">About</a></li>
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