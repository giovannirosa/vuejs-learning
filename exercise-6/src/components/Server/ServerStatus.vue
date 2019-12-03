<template>
  <div class="col-xs-12 col-sm-6">
    <p>Server Details are currently not updated</p>
    <p v-if="server">
      Server {{ server.id }} is with status {{ server.status }}
    </p>
  </div>
</template>

<script>
import { eventBus } from '../../../../communication/src/main';
export default {
  data() {
    return {
      server: null
    };
  },
  created() {
    eventBus.$on('serverSelected', server => {
      this.server = server;
    });
  }
};
</script>
