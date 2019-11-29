new Vue({
  el: "#exercise",
  data: {
    toggleClass: true,
    enterClass: "",
    enterClass2: "",
    enterClass3: "",
    enterStyle: "",
    progress: 0
  },
  methods: {
    startEffect: function() {
      const self = this;
      setInterval(function() {
        self.toggleClass = !self.toggleClass;
      }, 1000);
    },
    startProgress: function() {
      const self = this;
      if (self.progress === 100) {
        self.progress = 0;
      }
      const tid = setInterval(function() {
        self.progress += 10;
        if (self.progress === 100) {
          clearInterval(tid);
        }
        console.log(self.progress);
      }, 1000);
    }
  },
  computed: {
    whichClass: function() {
      return {
        highlight: this.toggleClass,
        shrink: !this.toggleClass
      };
    }
  }
});
