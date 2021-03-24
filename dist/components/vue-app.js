class VueApp extends HTMLElement {
  constructor(){
  super();
}


connectedCallback(){
this.innerHTML =  `
 <div id="vue-app">

 
   <div class="container">
     <div class="content inner">
       <h1 class="white-text center-align">{{band}}</h1>

       <div class="flex">


         <div class="band-info">
           <div class="flex">
             <img :src="img" alt="" class="size responsive-img flex-page">
             <img :src="img2" alt="" class="size responsive-img flex-page">
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
                   <h5 style="visibility:hidden;">Type</h5>
                   <ul>
                     <li v-for="discography in discography">
                       {{discography.type_year}}
                     </li>
                   </ul>
                 </td>
               </tr>
             </tbody>
           </table>
         </div>
       </div>


     </div>
   </div>
</div>`;

};
}

customElements.define('vue-app-component', VueApp);