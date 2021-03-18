
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
              'Afterimage', 
              './Bands/afterimage.html', 
              'dist/img/deathmetal/afterimage.webp',
              ''
        ),
          new Project (
              'Astillian', 
              'https://digitalassetmanagement.com/', 
              'dist/img/deathmetal/astillian.webp',
              ''
          ),
          new Project (
              'Arthure', 
              'https://meet-a-geek.today/',  
              'dist/img/deathmetal/arthure.webp',
              ''
          ),
          new Project (
              'Cruentis', 
              'https://www.smarttraining.com/', 
              'dist/img/deathmetal/cruentis.webp',
              ''
          ),
          new Project (
              'Diathekeke', 
              'https://micencostagebank.nl/index_september.php',  
              'dist/img/deathmetal/diatheke.webp',
              ''
          ),
          
          new Project (
              'Elephant Watchtower', 
              '',
              'dist/img/deathmetal/elephant-watchtower.webp',
              ''
          )
      ], 
  },

methods: {
  setFilter: function setFilter(filter) {
    this.currentFilter = filter;
      } 
  }
  
});