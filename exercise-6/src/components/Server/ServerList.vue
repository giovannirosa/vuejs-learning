<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="server in servers"
        :key="server"
        @click="serverClicked(server)"
        style="cursor: pointer"
      >
        Server #{{ server.id }}
      </li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from '../../../../communication/src/main';
export default {
  data: function() {
    return {
      servers: [
        { id: 1, status: 'Normal' },
        { id: 2, status: 'Critical' },
        { id: 3, status: 'Unknown' },
        { id: 4, status: 'Normal' }
      ]
    };
  },
  methods: {
    serverClicked(server) {
      // this.$emit('serverClicked', server);
      eventBus.selectServer(server);
    }
  }
};
</script>
