

new Vue({
el: '#vue-app',
data: {
      currentFilter: 'ALL',
      category: '',
      projectList: [
       {
            title: 'Aenon', 
            link: './aenon.html', 
            img: 'dist/img/metalcore/aenon.webp',
            category: 'METALCORE'
       },
          {
            title:'Afterimage', 
            link:'./afterimage.html', 
            img: 'dist/img/deathmetal/afterimage.webp',
             category: 'DEATH METAL'
        },
          {
            title:'Âstillian', 
            link:'./astillian.html', 
              img:'dist/img/deathmetal/astillian.webp',
              category:'DEATH METAL'
          },
          {
            title:'Nathan Arthur', 
            link:'./arthure.html',  
              img:'dist/img/deathmetal/arthure.webp',
              category:'DEATH METAL'
          },
          {
            title:'Ben Dixon', 
            link:'./ben-dixon.html', 
            img:'dist/img/metalcore/ben-dixon.webp',
            category:'METALCORE'
        },
        {
            title: 'Bloodlines', 
            link:'./bloodlines.html', 
            img:'dist/img/metalcore/bloodlines.webp',
            category:'METALCORE'
        },
        {
            title: 'Blue Fire Horizon', 
            link:'./bluefirehorizon.html', 
            img:'dist/img/metalcore/blue-fire-horizon.webp',
            category:'METALCORE'
        },
        {
            title: 'Collapse//Revive', 
            link:'./collapserevive.html', 
            img:'dist/img/metalcore/collapse-revive.webp',
            category:'METALCORE'
        },
        {
            title: 'Context', 
            link:'./cntxt.html', 
            img:'dist/img/metalcore/cntxt.webp',
            category:'METALCORE'
        },
        {
            title: 'Crowned in Sorrow', 
            link:'./afterimage.html', 
            img:'dist/img/deathmetal/derek-corzine.webp',
            category:'DOOM METAL'
        },
        {
            title:  'Cruentis', 
            link:'./afterimage.html', 
            img:'dist/img/deathmetal/cruentis.webp',
            category:'DEATHMETAL'
        },
        {
            title:  'Diathekeke', 
            link:'./afterimage.html',  
            img:'dist/img/deathmetal/diatheke.webp',
            category:'DEATH METAL'
        },
        {
            title:  'Elephant Watchtower', 
            link:'./afterimage.html',
            img:'dist/img/deathmetal/elephant-watchtower.webp',
            category:'DEATH METAL'
        },
        {
            title:  'Empty Grave', 
            link:'./afterimage.html', 
            img:'dist/img/deathmetal/emptygrave.webp',
            category:'DEATH METAL'
        },
        {
            title: 'Eonia', 
            link:'./afterimage.html', 
            img:'dist/img/metalcore/eonia.webp',
            category:'METALCORE'
        },
        {
            title: 'Every Knee Shall Bow', 
            link:'./afterimage.html', 
            img:'dist/img/deathmetal/eksb.webp',
            category:'DEATH METAL'
        },
          {
            title: 'Incarnate Deity', 
            link: './afterimage.html', 
            img:'dist/img/deathmetal/incarnatedeity.webp',
            category:'DEATH METAL'
          },
          {
            title: 'Jesus Wannabeez', 
            link:'./afterimage.html', 
            img:'dist/img/metal/jw.webp',
            category:'METALCORE'
        },
        {
            title: 'Oh, The Depth', 
            link:'./afterimage.html', 
            img:'dist/img/deathcore/oh-the-depth.webp',
            category:'DEATHCORE'
        },
          
         
      ], 
  },

methods: {
  setFilter: function (filter) {
    this.currentFilter = filter;
      } 
  },
  
});