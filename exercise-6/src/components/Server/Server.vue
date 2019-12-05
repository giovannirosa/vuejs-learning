<template>
  <div>Server #{{ id }} - {{ status }}</div>
</template>

<script>
export default {
  props: ['id', 'status']
};
</script>
