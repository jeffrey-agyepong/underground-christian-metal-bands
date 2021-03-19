
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
            'Aenon', 
            './Bands/aenon.html', 
            'dist/img/metalcore/aenon.webp',
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
              './Bands/afterimage.html',  
              'dist/img/deathmetal/arthure.webp',
              'DEVELOPMENT'
          ),
          new Project (
            'Ben Dixon', 
            './Bands/afterimage.html', 
            'dist/img/metalcore/ben-dixon.webp',
            'DEVELOPMENT'
        ),
        new Project (
            'Bloodlines', 
            './Bands/afterimage.html', 
            'dist/img/metalcore/bloodlines.webp',
            'DEVELOPMENT'
        ),
        new Project (
            'Blue Fire Horizon', 
            './Bands/afterimage.html', 
            'dist/img/metalcore/blue-fire-horizon.webp',
            'DEVELOPMENT'
        ),
        new Project (
            'Collapse//Revive', 
            './Bands/afterimage.html', 
            'dist/img/metalcore/collapse-revive.webp',
            'DEVELOPMENT'
        ),
        new Project (
            'Context', 
            './Bands/afterimage.html', 
            'dist/img/metalcore/cntxt.webp',
            'DEVELOPMENT'
        ),
        new Project (
            'Crowned in Sorrow', 
            './Bands/afterimage.html', 
            'dist/img/deathmetal/derek-corzine.webp',
            'DEVELOPMENT'
        ),
        new Project (
            'Cruentis', 
            './Bands/afterimage.html', 
            'dist/img/deathmetal/cruentis.webp',
            'DEVELOPMENT'
        ),
        new Project (
            'Diathekeke', 
            './Bands/afterimage.html',  
            'dist/img/deathmetal/diatheke.webp',
            'COLABORATION'
        ),
        new Project (
            'Elephant Watchtower', 
            './Bands/afterimage.html',
            'dist/img/deathmetal/elephant-watchtower.webp',
            'DEVELOPMENT'
        ),
        new Project (
            'Empty Grave', 
            './Bands/afterimage.html', 
            'dist/img/deathmetal/emptygrave.webp',
            'DEVELOPMENT'
        ),
        new Project (
            'Eonia', 
            './Bands/afterimage.html', 
            'dist/img/metalcore/eonia.webp',
            'DEVELOPMENT'
        ),
        new Project (
            'Every Knee Shall Bow', 
            './Bands/afterimage.html', 
            'dist/img/deathmetal/eksb.webp',
            'DEVELOPMENT'
        ),
          new Project (
              'Incarnate Deity', 
              './Bands/afterimage.html', 
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