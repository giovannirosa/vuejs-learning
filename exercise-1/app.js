new Vue({
  el: "#exercise",
  data: {
    name: "Giovanni",
    age: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Coritiba_FBC_%282011%29_-_PR.svg/1200px-Coritiba_FBC_%282011%29_-_PR.svg.png"
  },
  methods: {
    randomNum: (max, min) => Math.random() * (max - min) + min
  }
});
