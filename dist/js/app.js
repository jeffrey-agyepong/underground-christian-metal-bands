
class Project {
  constructor(title, link, img, category) {
      this.title = title,
      this.link = link, 
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
            'Aeonon', 
            './Bands/afterimage.html', 
            'dist/img/metalcore/aeonon.webp',
            'DESIGN'
      ),
          new Project (
              'Afterimage', 
              './Bands/afterimage.html', 
              'dist/img/deathmetal/afterimage.webp',
              'DESIGN'
        ),
          new Project (
              'Astillian', 
              'https://digitalassetmanagement.com/', 
              'dist/img/deathmetal/astillian.webp',
              'DESIGN'
          ),
          new Project (
              'Arthure', 
              'https://meet-a-geek.today/',  
              'dist/img/deathmetal/arthure.webp',
              'DEVELOPMENT'
          ),
          new Project (
            'Ben Dixon', 
            'https://www.smarttraining.com/', 
            'dist/img/metalcore/ben-dixon.webp',
            'DEVELOPMENT'
        ),
        new Project (
            'Bloodlines', 
            'https://www.smarttraining.com/', 
            'dist/img/metalcore/bloodlines.webp',
            'DEVELOPMENT'
        ),
        new Project (
            'Blue Fire Horizon', 
            'https://www.smarttraining.com/', 
            'dist/img/metalcore/blue-fire-horizon.webp',
            'DEVELOPMENT'
        ),
        new Project (
            'Collapse//Revive', 
            'https://www.smarttraining.com/', 
            'dist/img/metalcore/collapse-revive.webp',
            'DEVELOPMENT'
        ),
        new Project (
            'Context', 
            'https://www.smarttraining.com/', 
            'dist/img/metalcore/cntxt.webp',
            'DEVELOPMENT'
        ),
        new Project (
            'Crowned in Sorrow', 
            'https://www.smarttraining.com/', 
            'dist/img/deathmetal/derek-corzine.webp',
            'DEVELOPMENT'
        ),
        new Project (
            'Cruentis', 
            'https://www.smarttraining.com/', 
            'dist/img/deathmetal/cruentis.webp',
            'DEVELOPMENT'
        ),
        new Project (
            'Diathekeke', 
            'https://micencostagebank.nl/index_september.php',  
            'dist/img/deathmetal/diatheke.webp',
            'COLABORATION'
        ),
        new Project (
            'Elephant Watchtower', 
            'http://prettyexcellent.com/applecider/',
            'dist/img/deathmetal/elephant-watchtower.webp',
            'DEVELOPMENT'
        ),
        new Project (
            'Empty Grave', 
            'https://www.smarttraining.com/', 
            'dist/img/deathmetal/emptygrave.webp',
            'DEVELOPMENT'
        ),
        new Project (
            'Eonia', 
            'https://www.smarttraining.com/', 
            'dist/img/metalcore/eonia.webp',
            'DEVELOPMENT'
        ),
        new Project (
            'Every Knee Shall Bow', 
            'https://www.smarttraining.com/', 
            'dist/img/deathmetal/eksb.webp',
            'DEVELOPMENT'
        ),
          new Project (
              'Incarnate Deity', 
              'https://www.smarttraining.com/', 
              'dist/img/deathmetal/incarnatedeity.webp',
              'DEVELOPMENT'
          ),
          
          
         
      ], 
  },

methods: {
  setFilter: function setFilter(filter) {
    this.currentFilter = filter;
      } 
  }
  
});