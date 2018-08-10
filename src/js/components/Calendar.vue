<template>
  <div>
    <div v-for="day in days">{{ days }}</div>
  </div>
</template>


<script>

  export default {
    name: 'Calendar',
    data () {
      return {
        month: 9,
        year: 2018
      };
    },
    computed: {
      // Create all days in current month.
      days() {
        // Array to push days to.
        let days = [];
        let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-MM');

        do {
          days.push(currentDay);
          currentDay = this.$moment(currentDay).add(1, 'days');
        } while (currentDay.month() + 1 === this.month);

        return days;
      }
    }
  }
</script>


<style lang="scss"></style>
