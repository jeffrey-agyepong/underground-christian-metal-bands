var bandData = [{
  name: "Afterimage",
  photo: "dist/img/afterimage.jpg",
},
{
  name: "Hashem",
  photo: "dist/img/hashem.jpg"
},
{
  name:"Bismoth",
  photo:"dist/img/bismoth.webp"
}

]

new Vue({
  el:'#vue-app',
  data:{
       cardinfos:bandData,
       currentIndx: 0

   },

   methods: {}

  

});