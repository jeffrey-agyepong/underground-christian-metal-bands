
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
            'His Kingdom Suffers', 
              './Bands/afterimage.html', 
              'dist/img/deathcore/hks.webp',    
        ),
        new Project (
          'Searching Serenity', 
            './Bands/afterimage.html', 
            'dist/img/deathcore/searchingserenity.webp',    
      ),
          
      ], 
  },

methods: {
  setFilter: function setFilter(filter) {
    this.currentFilter = filter;
      } 
  }
  
});