class VueApp extends HTMLElement {
  constructor(){
  super();
}


connectedCallback(){
this.innerHTML =  `
 <div id="vue-app">

 <div class="row">
   <div class="container">
     <div class="content inner">
       <h1 class="white-text center-align">{{band}}</h1>

       <div class="flex">


         <div class="band-info">
           <div class="flex">
             <img :src="img" alt="" class="size responsive-img flex-page">

           </div>

           <table>
             <tbody>
               <tr>
                 <td class="white-text">Formed</td>
                 <td class="white-text">{{ formed }}</td>
               </tr>
               <tr>
                 <td class="white-text">Status</td>
                 <td class="white-text">{{ status }}</td>
               </tr>
               <tr>
                 <td class="white-text">Genre</td>
                 <td class="white-text">{{ genre }}</td>
               </tr>
               <tr>
                 <td class="white-text">Record Label</td>
                 <td class="white-text">{{ label }}</td>
               </tr>
               <tr>
                 <td class="white-text">Origin</td>
                 <td class="white-text">{{ origin }}</td>
               </tr>
               <tr>
                 <td class="white-text">
                   <h5>Members:</h5>
                   <ul>
                     <li v-for="member in members">
                       {{member.name}}

                     </li>
                   </ul>
                 </td>
                 <td class="white-text">
                   <h5 style="visibility:hidden;">instrument</h5>
                   <ul>
                     <li v-for="member in members">
                       {{member.instrument}}

                     </li>
                   </ul>
                 </td>

               </tr>
               <tr>
                 <td class="white-text">
                   <h5>Discography:</h5>
                   <ul>
                     <li v-for="discography in discography">
                       {{discography.album}}

                     </li>
                   </ul>
                 </td>
                 <td class="white-text">
                   <h5>Type</h5>
                   <ul>
                     <li v-for="discography in discography">
                       {{discography.type}}

                     </li>
                   </ul>
                 </td>
                 <td class="white-text">
                   <h5>Year</h5>
                   <ul>
                     <li v-for="discography in discography">
                       {{discography.year}}

                     </li>
                   </ul>
                 </td>
               </tr>

               <tr>
                 <td>
                 <a href="https://open.spotify.com/album/5BQd3Q7vrBfw1DqTvSEppc?si=XaUNW0JtRFCQIPP-dcLHwg" target="_blank"><i
                     class="fab fa-spotify fa-3x white-text"></i></a>
                   <a href="https://music.apple.com/ca/album/heart-journal-ep/1406077764" target="_blank"><i
                     class="fab fa-itunes fa-3x white-text"></i></a>
                 </td>

                 <td>
                   <a href="https://youtube.com/playlist?list=PLECay82Kh7XcR-kZ6kvT0uY2ViCq93M3k" target="_blank"><i
                     class="fab fa-youtube fa-3x white-text"></i></a>
                    <a href="https://cntxt.bandcamp.com/album/heart-journal-ep" target="_blank"><i
                 class="fab fa-bandcamp fa-3x white-text"></i></a>
                 </td>
               </tr>
             </tbody>
           </table>
         </div>
       </div>


     </div>
   </div>
 </div>
</div>`;

};
}

customElements.define('vue-app-component', VueApp);