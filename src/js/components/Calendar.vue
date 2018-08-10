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

      // Generate days in current month.
      days() {

        // Empty array to push days to.
        let days = [];
        let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D');

        // Push currentDay to days array until all days in the current month are pushed.
        do {
          days.push(currentDay);
          // Instance of moment that increments currentDay until all days in the current month are pushed.
          currentDay = this.$moment(currentDay).add(1, 'days');
        } while ((currentDay.month() + 1) === this.month);


        // Add padding days from the end of the previous month.
        // Reset currentDay value to first day of the month.
        currentDay = this.$moment(days[0]);

        // Unshift currentDay to days array while currentDay is not Monday.
        do {
          // Instance of moment that decrements currentDay by 1 day.
          currentDay = this.$moment(currentDay).subtract(1, 'days');
          days.unshift(currentDay);
          // 1 is Monday in the moment library.
        } while (currentDay.day() !== 1);


        // Add padding days from the beginning of the following month.
        // Reset currentDay value to last day of the current month.
        currentDay = this.$moment(days.length - 1);

        // Push currentDay to days array while currentDay is not Sunday.
        do {
          currentDay = this.$moment(currentDay).add(1, 'days');
          days.push(currentDay);
          // 0 is Sunday in the moment library.
        } while (currentDay.day() !== 0);

        return days;
      }
    }
  }
</script>


<style lang="scss"></style>
