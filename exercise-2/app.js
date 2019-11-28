new Vue({
  el: "#exercise",
  data: {
    value: ""
  },
  methods: {
    alert: function() {
      alert("Alert!");
    },
    store: function(event) {
      this.value = event.target.value;
    }
  }
});
