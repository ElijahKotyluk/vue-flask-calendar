import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


export default new Vuex.Store({
    state: {
      currentYear: 2018,
      currentMonth: 8,
      eventFormPosX: 0,
      eventFormPosY: 0
    },
    mutations: {
      setCurrentMonth(state, payload) {
        state.currentMonth = payload;
      },
      setCurrentYear(state, payload) {
        state.currentYear = payload;
      },
      eventFormPos(state, payload) {
        state.eventFormPosX = payload.x;
        state.eventFormPosY = payload.y;
      }
    }
});
