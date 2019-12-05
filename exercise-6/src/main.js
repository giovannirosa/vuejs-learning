import Vue from 'vue';
import App from './App.vue';
import Header from './components/Shared/Header.vue';
import Footer from './components/Shared/Footer.vue';
import ServerList from './components/Server/ServerList.vue';
import ServerStatus from './components/Server/ServerStatus.vue';
import Server from './components/Server/Server.vue';

export const eventBus = new Vue({
  methods: {
    selectServer(server) {
      this.$emit('serverSelected', server);
    }
    // switchStatus(status) {
    //   this.$emit('statusSwitched', status);
    // }
  }
});

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('app-server', Server);
Vue.component('app-server-list', ServerList);
Vue.component('app-server-status', ServerStatus);

new Vue({
  el: '#app',
  render: h => h(App)
});
