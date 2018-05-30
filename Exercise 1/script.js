new Vue({
  el:'#exercise',
  data:{
    YOUR_NAME: 'Jirayu Laungwilawan',
    AGE: 21,
    imageSrc: 'https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c_400x400.jpeg',
  },
  methods: {
    randomNumber: function(){
      return Math.random()
    },
    changeName: function(event){
      this.YOUR_NAME = event.target.value
    }
  }
})