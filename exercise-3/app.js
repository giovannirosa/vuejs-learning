new Vue({
  el: "#app",
  data: {
    value: 0
  },
  watch: {
    result: function() {
      const vm = this;
      setTimeout(function() {
        vm.value = 0;
      }, 5000);
    }
  },
  computed: {
    result: function() {
      return this.value === 37 ? "done" : "not there yet";
    }
  }
});
