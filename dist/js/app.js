

new Vue({
el: '#vue-app',
data: {
      currentFilter: 'ALL',
      category: '',
      projectList: [
       {
            title: 'Ænon', 
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
            title:'Arthure', 
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
          title:'Be Not Betrayed', 
          link:'./benotbetrayed.html', 
          img:'dist/img/blackmetal/be-not-betrayed2.jpg',
          category:'BLACK METAL'
        },
        {
        title:'Bismoth', 
        link:'./bismoth.html', 
        img:'dist/img/blackmetal/bismoth.webp',
        category:'BLACK METAL'
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
            link:'./collapse-revive.html', 
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
            link:'./crowned-in-sorrow.html', 
            img:'dist/img/deathmetal/derek-corzine.webp',
            category:'DOOM METAL'
        },
        {
            title:  'Cruentis', 
            link:'./cruentis.html', 
            img:'dist/img/deathmetal/cruentis.webp',
            category:'DEATHMETAL'
        },
        {
            title:  'Diathekeke', 
            link:'./diatheke.html',  
            img:'dist/img/deathmetal/diatheke.webp',
            category:'DEATH METAL'
        },
        {
            title:  'Elephant Watchtower', 
            link:'./elephant-watchtower.html',
            img:'dist/img/deathmetal/elephant-watchtower.webp',
            category:'DEATH METAL'
        },
        {
            title:  'Empty Grave', 
            link:'./emptygrave.html', 
            img:'dist/img/deathmetal/emptygrave.webp',
            category:'DEATH METAL'
        },
        {
            title: 'Eonia', 
            link:'./eonia.html', 
            img:'dist/img/metalcore/eonia.webp',
            category:'METALCORE'
        },
        {
            title: 'Every Knee Shall Bow', 
            link:'./eksb.html', 
            img:'dist/img/deathmetal/eksb.webp',
            category:'DEATH METAL'
        },
        {
          title: 'Hashem', 
          link:'./hashem.html', 
          img:'dist/img/deathmetal/hashem.webp',
          category:'DEATH METAL'
        },
        {
          title: 'His Kingdom Suffers', 
          link:'./hiskingdomsuffers.html', 
          img:'dist/img/deathcore/hks.webp',
          category:'DEATHCORE'
        },
          {
            title: 'Incarnate Deity', 
            link: './incarnatedeity.html', 
            img:'dist/img/deathmetal/incarnatedeity.webp',
            category:'DEATH METAL'
          },
          {
            title: 'Jesus Wannabeez', 
            link:'./jesuswannabeez.html', 
            img:'dist/img/metal/jw1.webp',
            category:'METAL'
        },
        {
            title: 'Oh, The Depth', 
            link:'./ohthedepth.html', 
            img:'dist/img/deathcore/oh-the-depth.webp',
            category:'DEATHCORE'
        },
          {
            title: 'Roots of Tragedy', 
            link:'./rootsoftragedy.html', 
            img:'dist/img/deathmetal/roots-of-tragedy.webp',
            category:'DEATH METAL'
          },
          {
            title: 'Searching Serenity', 
            link:'./searchingserenity.html', 
            img:'dist/img/deathcore/searchingserenity.webp',
            category:'DEATHCORE'
          },
          {
            title: 'Shamash', 
            link:'./shamash.html', 
            img:'dist/img/metal/shamash.webp',
            category:' METAL'
          },/*
          {
            title: 'Spite The Beast', 
            link:'./afterimage.html', 
            img:'dist/img/deathmetal/hashem.webp',
            category:'DEATH METAL'
          },
          {
            title: 'Symphony of Heaven', 
            link:'./afterimage.html', 
            img:'dist/img/deathmetal/hashem.webp',
            category:'DEATH METAL'
          },
          {
            title: 'Tax Collector', 
            link:'./afterimage.html', 
            img:'dist/img/deathmetal/hashem.webp',
            category:'DEATH METAL'
          },
          {
            title: 'The Weeping Gate', 
            link:'./afterimage.html', 
            img:'dist/img/deathmetal/hashem.webp',
            category:'DEATH METAL'
          },
          {
            title: 'Your Hands Write History', 
            link:'./afterimage.html', 
            img:'dist/img/deathmetal/hashem.webp',
            category:'DEATH METAL'
          },
          {
            title: 'Separatist', 
            link:'./afterimage.html', 
            img:'dist/img/deathmetal/hashem.webp',
            category:'DEATH METAL'

          }*/

         
      ], 
  },

methods: {
  setFilter: function (filter) {
    this.currentFilter = filter;
      } 
  },
  
});