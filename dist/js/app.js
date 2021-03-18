/*var bandData = [

  {
    name: "Afterimage",
    photo: "dist/img/deathmetal/afterimage.webp",
    link:"beyondthegravemusic.com"
  },
  {
    name: "Arthure",
    photo: "dist/img/deathmetal/arthure.webp"
  },
  {
    name: "Bismoth",
    photo: "dist/img/bismoth.webp",
    
  },
  {
    name: "Astillian",
    photo: "dist/img/deathmetal/astillian.webp"
  },
  {
    name: "Cruentis",
    photo: "dist/img/deathmetal/cruentis.webp"
  },
  {
    name: "Diatheke",
    photo: "dist/img/deathmetal/diatheke.webp"
  },
  {
    name:"Elephant Watchtower",
    photo:"dist/img/deathmetal/elephant-watchtower.webp"
  },
  {
   name:"Empty Grave",
   photo:"dist/img/deathmetal/emptygrave.webp" 
  },
  {
  name: "Every Knee Shall Bow",
  photo:"dist/img/deathmetal/eksb.webp" 
  },
  {
    name: "Hashem",
    photo: "dist/img/deathmetal/hashem.webp"
  },
  {
    name:"Incarnate Deity",
    photo: "dist/img/deathmetal/incarnatedeity.webp"
  },
  {
    name:"Roots of Tragedy",
    photo: "dist/img/deathmetal/roots-of-tragedy.webp"
  },

{
  name: "His Kingdom Suffers",
  photo: "dist/img/deathcore/hks.webp",
},
{
  name: "Searching Serenity",
  photo: "dist/img/deathcore/searchingserenity.webp"
},


]

new Vue({
  el:'#vue-app',
  data:{
       cardinfos:bandData,
       currentIndx: 0
   },
   links:[

    {link:"./bands/aftermage.html"},
    {link:"./bands/aftermage.html"}
   ],

   methods: {}

  

});*/



class Project {
  constructor(title, link, author, img, category) {
      this.title = title,
      this.link = link,
      this.author = author, 
      this.img = img,
      this.category = category
  }
}

new Vue({
el: '#vue-app',
data: {
      currentFilter: 'ALL',
      projectList: [
          new Project (
              'Afterimage', 
              './Bands/afterimage.html', 
              'Dessert Tools za', 
              'dist/img/deathmetal/afterimage.webp',
              'DESIGN'
        ),
          new Project (
              'Astillian', 
              'https://digitalassetmanagement.com/', 
              'Widen',
              'dist/img/deathmetal/astillian.webp',
              'DESIGN'
          ),
          new Project (
              'Arthure', 
              'https://meet-a-geek.today/', 
              'Contenforces', 
              'dist/img/deathmetal/arthure.webp',
              'DEVELOPMENT'
          ),
          new Project (
              'Cruentis', 
              'https://www.smarttraining.com/', 
              'Smart Training LCC',
              'dist/img/deathmetal/cruentis.webp',
              'DEVELOPMENT'
          ),
          new Project (
              'Diathekeke', 
              'https://micencostagebank.nl/index_september.php', 
              'Contenforces', 
              'dist/img/deathmetal/diatheke.webp',
              'COLABORATION'
          ),
          
          new Project (
              'Elephant Watchtower', 
              'http://prettyexcellent.com/applecider/', 
              'A. A. Ron',
              'dist/img/deathmetal/elephant-watchtower.webp',
              'DEVELOPMENT'
          )
      ], 
  },

methods: {
  setFilter: function setFilter(filter) {
    this.currentFilter = filter;
      } 
  }
  
});