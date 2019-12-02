function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

new Vue({
  el: "#app",
  data: {
    player: 100,
    monster: 100,
    gameStarted: false,
    actions: []
  },
  methods: {
    startGame: function() {
      this.gameStarted = true;
    },
    attack: function() {
      const damage = random(5, 10);
      this.monster -= damage;
      this.actions.unshift("PLAYER HITS MONSTER FOR " + damage);
      if (this.checkWin()) {
        return;
      }

      this.monsterAttacks();
    },
    special: function() {
      const damage = random(10, 20);
      this.monster -= damage;
      this.actions.unshift("PLAYER HITS MONSTER FOR " + damage);
      if (this.checkWin()) {
        return;
      }

      this.monsterAttacks();
    },
    heal: function() {
      if (this.player <= 90) {
        this.player += 10;
      } else {
        this.player = 100;
      }
      this.actions.unshift("PLAYER HEALS HIMSELF FOR " + 10);

      this.monsterAttacks();
    },
    giveUp: function() {
      this.player = 100;
      this.monster = 100;
      this.gameStarted = false;
      this.actions = [];
    },
    monsterAttacks: function() {
      const damage = random(5, 12);
      this.player -= damage;
      this.actions.unshift("MONSTER HITS PLAYER FOR " + damage);
      this.checkWin();
    },
    checkWin: function() {
      if (this.monster <= 0) {
        if (confirm("You won! New Game?")) {
          this.giveUp();
        }
        return true;
      } else if (this.player <= 0) {
        if (confirm("You lost! New Game?")) {
          this.giveUp();
        }
        return true;
      }
      return false;
    }
  },
  computed: {
    playerLife: function() {
      // if (this.player < 1) {
      //   alert("You lose! New Game?");
      // }
      return this.player;
    },
    monsterLife: function() {
      // if (this.monster < 1) {
      //   alert("You win! New Game?");
      // }
      return this.monster;
    }
  }
});
