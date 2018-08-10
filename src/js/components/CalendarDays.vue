<template>
  <div class="day">{{ day.format('D') }}</div>
</template>


<script>
export default {
  name: 'CalendarDays',
  props: ['day']
};
</script>
