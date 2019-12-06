export const appendSize = {
  computed: {
    append() {
      return this.text + ' (' + this.text.length + ')';
    }
  }
};
