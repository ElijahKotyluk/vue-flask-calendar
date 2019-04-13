<template>
  <div class="month-selector">
    <button @click="decrement">&#8606;</button>
    <div class="header-month">{{ formattedDate }}</div>
    <button @click="increment">&#8608;</button>
</div>
</template>


<script>
export default {
  name: 'CurrentMonth',
  methods: {
    decrement () {
      // If month is January set month to December and decrement year,
      // otherwise decrement month as normal.
      if (this.month === 1) {
        this.$store.commit('setCurrentMonth', 12);
        this.$store.commit('setCurrentYear', this.year - 1);
      } else {
        this.$store.commit('setCurrentMonth', this.month - 1);
      }
      // Change eventFormActive state to false when decrement is pressed.
      this.$store.commit('eventFormActive', false);
    },
    increment () {
      // If month is December increment year and month,
      // otherwise increment month as normal.
      if (this.month === 12) {
        this.$store.commit('setCurrentMonth', 1);
        this.$store.commit('setCurrentYear', this.year + 1);
      } else {
        this.$store.commit('setCurrentMonth', this.month + 1);
      }
      // Change eventFormActive state to true when increment is pressed.
      this.$store.commit('eventFormActive', false);
    }
  },
  computed: {
    /* Format date for CurrentMonth component */
    formattedDate() {
      return this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D').format('MMMM YYYY');
    },
    /* Current month */
    month() {
      return this.$store.state.currentMonth;
    },
    /* Current year */
    year() {
      return this.$store.state.currentYear;
    }
  }
}
</script>

<style lang='scss'>
.header-month {
  font-size: 1.35rem;
}
</style>
