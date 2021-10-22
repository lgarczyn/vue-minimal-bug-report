import 'reflect-metadata';
import Vue from 'vue';
import App from './App.vue';

// Init
new Vue({
  render: (h) => h(App),
}).$mount('#app');
