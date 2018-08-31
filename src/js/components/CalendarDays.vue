<template>
  <div :class="classObject" @click="captureClick">{{ day.format('D') }}</div>
</template>


<script>
export default {
  name: 'CalendarDays',
  props: ['day'],
  computed: {
    classObject () {
      let today = this.day.isSame(this.$moment(), 'day');

      return {
        day: true,
        today,
        /* Days that have occured prior to today */
        past: this.day.isSameOrBefore(this.$moment(), 'day') && !today
      }
    }
  },
  methods: {
    captureClick(event) {
      console.log(event);
    }
  }
}
</script>
