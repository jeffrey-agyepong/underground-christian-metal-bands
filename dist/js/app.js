

new Vue({
el: '#vue-app',
data: {
      currentFilter: 'ALL',
      category: '',
      projectList: [
         {
            title: 'Ænon', 
            link: './aenon.html', 
            img: 'dist/img/metalcore/aenon-logo.webp',
            category: 'METALCORE'
        },
          {
            title:'Afterimage', 
            link:'./afterimage.html', 
            img: 'dist/img/deathmetal/afterimage-logo.webp',
            category: 'DEATH METAL'
         },
         {
            title:'Ascendant',
            link: './ascendant.html',
            img:'dist/img/deathmetal/ascendant1.jpg',
            category:'DEATH METAL'

           },
          {
            title:'Âstillian', 
            link:'./astillian.html', 
            img:'dist/img/deathmetal/astillian-logo.webp',
            category:'DEATH METAL'
          },
          {
            title:'Arthure', 
            link:'./arthure.html',  
            img:'dist/img/deathmetal/arthure.webp',
            category:'DEATH METAL'
          },
          /*{
            title:'Ben Dixon', 
            link:'./ben-dixon.html', 
            img:'dist/img/metalcore/ben-dixon.webp',
            category:'METALCORE'
        },*/
        {
          title:'The Beckoning',
          link:'./the-beckoning.html',
          img:'dist/img/extreme-metal/thebeckoning-logo.jpg',
          category:'EXTREME METAL'
        },
        {
          title:'Be Not Betrayed', 
          link:'./be-not-betrayed.html', 
          img:'dist/img/blackmetal/be-not-betrayed.jpg',
          category:'BLACK METAL'
        },
        {
          title:'Bismoth', 
          link:'./bismoth.html', 
          img:'dist/img/blackmetal/bismothlogo.jpg',
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
            link:'./blue-fire-horizon.html', 
            img:'dist/img/metalcore/blue-fire-horizon2.webp',
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
            img:'dist/img/metalcore/cntxtlogo.webp',
            category:'METALCORE'
        },
        {
            title: 'Crowned in Sorrow', 
            link:'./crowned-in-sorrow.html', 
            img:'dist/img/deathmetal/crowned-in-sorrow.jpg',
            category:'DEATH METAL'
        },
        {
            title:  'Cruentis', 
            link:'./cruentis.html', 
            img:'dist/img/deathmetal/cruentis.jpg',
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
            category:'DEATHCORE'
        },
        {
          title: 'Hashem', 
          link:'./hashem.html', 
          img:'dist/img/deathmetal/hashemlogo.jpg',
          category:'DEATH METAL'
        },
        {
          title: 'His Kingdom Suffers', 
          link:'./his-kingdom-suffers.html', 
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
            img:'dist/img/metal/jw.webp',
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
            link:'./roots-of-tragedy.html', 
            img:'dist/img/extreme-metal/roots-of-tragedy.webp',
            category:'EXTREME METAL'
          },
          {
            title:'Scarlet Oath',
            link:'./scarlet-oath.html',
            img:'dist/img/extreme-metal/scarlet-oat1.jpg',
            category:'EXTREME METAL'
          },
          {
            title: 'Searching Serenity', 
            link:'./searching-serenity.html', 
            img:'dist/img/deathcore/searchingserenity.jpg',
            category:'DEATHCORE'
          },
          {
            title: 'Separatist', 
            link:'./separatist.html', 
            img:'dist/img/deathmetal/separatist1.jpg',
            category:'DEATH METAL'

          },
          {
            title: 'Shamash', 
            link:'./shamash.html', 
            img:'dist/img/deathmetal/shamash1.webp',
            category:'DEATH METAL'
          },
          /*{
            title: 'Spite The Beast', 
            link:'./afterimage.html', 
            img:'dist/img/deathmetal/hashem.webp',
            category:'DEATH METAL'
          },*/
          {
            title: 'Symphony of Heaven', 
            link:'./symphony-of-heaven.html', 
            img:'dist/img/deathmetal/symphonyofheavenlogo.webp',
            category:'DEATH METAL'
          },
          {
            title: 'Tax Collector', 
            link:'./tax-collector.html', 
            img:'dist/img/metalcore/taxcollector.webp',
            category:'METALCORE'
          },
          {
            title: 'The Weeping Gate', 
            link:'./the-weeping-gate.html', 
            img:'dist/img/deathmetal/theweepinggatelogo.jpg',
            category:'DEATH METAL'
          },
         { title: 'Throne of Awful Splendor',
            link:'./throne-of-awful-splendor.html',
            img:'dist/img/deathmetal/toas.jpg',
            category:'DEATH METAL'
          },
          {
            title: 'Your Hands Write History', 
            link:'./yhwh.html', 
            img:'dist/img/metalcore/yhwh.webp',
            category:'METALCORE'
          },
          
          
            
         
      ], 
  },

methods: {
  setFilter: function (filter) {
    this.currentFilter = filter;
      } 
  },
  
});