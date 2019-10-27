import io from 'socket.io-client';
import Vue from 'vue';
import VueSocketIOExt from 'vue-socket.io-extended';

import './registerServiceWorker';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const socket = io('http://127.0.0.1:9000', { path: '/txspending' });
Vue.use(VueSocketIOExt, socket, { store });

new Vue({
  sockets: {
    connect() {
      console.log('Aggregator connected.');
    },
    customEmit(val) {
      console.log(`custom emit fired with val=${val}`);
    },
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app');
