import Vue from 'vue';
import App from './components/App.vue';

import store from './../store';

import Vuex from 'vuex';
Vue.use(Vuex);

import moment from 'moment-timezone';
// Set timezone to UTC.
moment.tz.setDefault('UTC');
// Create moment object to use in any component.
Object.defineProperty(Vue.prototype, '$moment', {
  get() {
    return this.$root.moment
  }
});


var app = new Vue({
  el: '#app',
  data: {
    moment
  },
  store,
  render: h => h(App)
});
