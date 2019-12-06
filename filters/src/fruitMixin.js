export const fruitMixin = {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(el => el.match(this.filterText));
    }
  }
};
