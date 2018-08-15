<template>
  <div>{{ formattedDate }}</div>
</template>


<script>
export default {
  name: 'CurrentMonth',
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
</style>
