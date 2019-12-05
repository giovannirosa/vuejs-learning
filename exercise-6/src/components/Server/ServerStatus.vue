<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="server">
      Server {{ server.id }} is with status {{ server.status }}
    </p>
    <button v-if="server" @click="switchStatus('Critical')">
      Switch to Critical
    </button>
    <button v-if="server" @click="switchStatus('Normal')">
      Switch to Normal
    </button>
    <button v-if="server" @click="switchStatus('Unknown')">
      Switch to Unknown
    </button>
  </div>
</template>

<script>
import { eventBus } from '../../main';
export default {
  data() {
    return {
      server: null
    };
  },
  methods: {
    switchStatus(newStatus) {
      this.server.status = newStatus;
    }
  },
  created() {
    eventBus.$on('serverSelected', server => {
      this.server = server;
    });
  }
};
</script>
