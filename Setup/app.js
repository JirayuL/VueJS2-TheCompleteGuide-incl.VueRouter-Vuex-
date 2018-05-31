new Vue({
  el: '#app',
  data: {
    gameIsRunning: false,
    playerHealth: 100,
    monsterHealth: 100,
    turns: []
  },
  methods: {
    end: function() {
      this.gameIsRunning = !this.gameIsRunning
    },
    newGame:function() {
      this.playerHealth = 100
      this.monsterHealth =  100
      this.gameIsRunning = true
    },
    playerAttack:function() {
      var damage = this.calculateDamage(3, 10)
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits monster for ' + damage
      })
      this.checkWin()
    },
    monsterAttack:function() {
      var damage = this.calculateDamage(5, 12)
      this.playerHealth -= damage
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits player for ' + damage
      })
      this.checkWin()
    },
    attack:function() {
      this.playerAttack()
      this.monsterAttack()
    },
    checkWin: function() {
      if(this.monsterHealth <= 0){
        alert('You won!')
        this.gameIsRunning = false
      }
      if(this.playerHealth <= 0){
        alert('You lost!')
        this.gameIsRunning = false
      }
    },
    playerSpecialAttack: function() {
      var damage = this.calculateDamage(10, 20)
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer: true,
        text: 'Player special attack monster for ' + damage
      })
      this.monsterAttack()
    },
    playerHeal: function() {
      if(this.playerHealth < 90){
        this.playerHealth += 10
      } else {
        this.playerHealth = 100
      }
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heal for 10'
      })
      this.monsterAttack()
    },
    calculateDamage: function(min, max) {
      return Math.max(Math.floor((Math.random()*max)), min)
    }
  }
});
