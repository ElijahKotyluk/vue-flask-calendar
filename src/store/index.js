import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import moment from "moment-timezone";
moment.tz.setDefault("UTC");

// Vuex store.
export default new Vuex.Store({
  state: {
    currentYear: 2018,
    currentMonth: 8,
    eventFormPosX: 0,
    eventFormPosY: 0,
    eventFormActive: false,
    // Array of events.
    events: [
      {
        description: "Random Event1",
        date: moment("2018-09-06", "YYYY-MM-DD")
      },
      {
        description: "Random Event2",
        date: moment("2018-09-15", "YYYY-MM-DD")
      },
      {
        description: "Random Event3",
        date: moment("2018-09-14", "YYYY-MM-DD")
      }
    ],
    eventFormDate: moment()
  },
  mutations: {
    // Set current month.
    setCurrentMonth(state, payload) {
      state.currentMonth = payload;
    },
    // Set current year.
    setCurrentYear(state, payload) {
      state.currentYear = payload;
    },
    // Event form position.
    eventFormPos(state, payload) {
      state.eventFormPosX = payload.x;
      state.eventFormPosY = payload.y;
    },
    // Event form active.
    eventFormActive(state, payload) {
      state.eventFormActive = payload;
    },
    // Create/Add event.
    addEvent(state, payload) {
      state.events.push({
        description: payload,
        date: state.eventFormDate
      });
    },
    // Event form date.
    eventFormDate(state, payload) {
      state.eventFormDate = payload;
    }
  }
});
