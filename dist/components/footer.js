class Footer extends HTMLElement {
  constructor(){
  super();
}


connectedCallback(){
this.innerHTML =`
<footer class="page-footer">
<div class="container">
  <div class="row">
    <div class="col l6 s12">
      <h5 class="white-text center">Consider Supporting Us</h5>
      <p class="grey-text text-lighten-4 center"><a href='https://ko-fi.com/I2I544E9M' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi2.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a></p>    
    </div>
    <div class="col l4 offset-l2 s12">
    <h5 class="white-text center-align">Connect With Us</h5>
    <div class="flex icons center-align">

      <span class="span"><a href="https://web.facebook.com/Beyondthegrave777" class="icon brands fab fa-facebook fa-3x"><span
            class="label"></span></a></span>
      <span class="span"><a href="https://www.instagram.com/beyond.the.grave_/" class="icon brands fab fa-instagram fa-3x"><span
            class="label"></span></a></span>
      <span class="span"><a href="https://www.youtube.com/channel/UCCXafO-fbIZnTHNoRlx2QWg
        " class="icon brands fab fa-youtube fa-3x"><span class="label"></span></a></span>

    </div>
    </div>
  </div>
</div>
<div class="footer-copyright left-align">
  <div class="container">
  <div class="footer_links">
  <span class="grey-text text-lighten-4 center-align" > © 2021 Beyond The Grave</span>
   
   <a class="grey-text text-lighten-4 center-align" href="https://beyondthegravemusic.com/privacy-policy.html">Privacy Policy</a>
   <a class="grey-text text-lighten-4 center" href="https://cwd.beyondthegravemusic.com/">Concise Web Designs</a>
   
   </div>
  </div>
</div>
</footer>`
;

}

}

customElements.define('footer-component', Footer);