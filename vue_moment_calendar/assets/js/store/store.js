import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// Import moment library.
import moment from "moment-timezone";
moment.tz.setDefault("UTC");

// Import services.
import services from '../services';

// Vuex store.
export default new Vuex.Store({
  state: {
    currentYear: moment().year(),
    currentMonth: moment().month() + 1,
    eventFormPosX: 0,
    eventFormPosY: 0,
    eventFormActive: false,
    // Array of events.
    events: [
      {
        description: "Random Event1",
        date: moment("2019-02-06", "YYYY-MM-DD")
      },
      {
        description: "Random Event2",
        date: moment("2019-02-15", "YYYY-MM-DD")
      },
      {
        description: "Random Event3",
        date: moment("2019-02-14", "YYYY-MM-DD")
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
      state.events.push(payload);
    },
    loadEvents(state, events) {
      for (let i = 0; i < events.length; i++){
        console.log(events[i].date);
        let newDate = moment(events[i].date);
        events[i].date = newDate;
        console.log(events[i].date)
        state.events.push(events[i]);
      };
    },
    // Event form date.
    eventFormDate(state, payload) {
      state.eventFormDate = payload;
    }
  },
  actions: {
    addEvent(context, payload) {
      let data = {
        description: payload,
        date: context.state.eventFormDate
      };
      services.myEvent.create({
        data
      })
        context.commit('addEvent', data);
    },
    loadEvents(context, events) {
      context.commit('loadEvents', events)
    }
  }
});
