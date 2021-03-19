
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
              'Bismoth', 
              './Bands/bismoth.html', 
              'dist/img/blackmetal/bismoth.webp',
              
        )
         
      ], 
  },

methods: {
  setFilter: function setFilter(filter) {
    this.currentFilter = filter;
      } 
  }
  
});