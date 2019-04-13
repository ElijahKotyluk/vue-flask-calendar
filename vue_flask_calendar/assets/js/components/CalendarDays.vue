<template>
  <div :class="classObject" @dblclick="captureClick">
    {{ day.format('D') }}
    <ul class="event-list">
      <li v-for="event in events" :key="event.id">{{ event.description }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CalendarDays",
  props: ["day"],
  data () {
    return {
    }
  },
  computed: {
    events() {
      // Return filtered list of events to match the day they were created.
      return this.$store.state.events.filter(event =>
        event.date.isSame(this.day, "day")
      );
    },
    classObject() {
      let eventFormDate = this.$store.state.eventFormDate;
      let eventFormActive = this.$store.state.eventFormActive;
      let today = this.day.isSame(this.$moment(), "day");

      return {
        day: true,
        today,
        // Days that have occured prior to today.
        past: this.day.isSameOrBefore(this.$moment(), "day") && !today,
        active: eventFormDate.isSame(this.day, 'day') && eventFormActive
      };
    }
  },
  methods: {
    captureClick(event) {
      // Save click position to Vuex store to display event form.
      this.$store.commit("eventFormPos", {
        x: event.clientX,
        y: event.clientY
      });
      // Display event form on clicked day.
      this.$store.commit("eventFormActive", true);
      this.$store.commit("eventFormDate", this.day);
    }
  }
};
</script>
