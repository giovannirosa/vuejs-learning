<template>
  <div>
    <app-server-status v-for="server in 5" :key="server"></app-server-status>
  </div>
</template>

<script>
import ServerStatusVue from "./ServerStatus.vue";
export default {
  components: {
    "app-server-status": ServerStatusVue
  }
};
</script>
