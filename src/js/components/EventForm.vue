<template>
  <div id="event-form" :class="{ active: true }" :style="{ top: top, left: left }"></div>
</template>


<script>
export default {
  name: 'EventForm',
  computed: {
    top () {
      return `${this.$store.state.eventFormPosY}px`
    },
    left () {
      return `${this.$store.state.eventFormPosX}px`
    }
  }
}
</script>


<style lang='scss'>
#event-form {
  display: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
  position: fixed;
  width: 300px;
  transform: translate(-50%, -100%);
  z-index: 10;
  padding: 1rem;
  background-color: white;
  border: 1px blue solid;

  &.active {
    display: flex;
  }

  flex-direction: column;
  align-content: space-between;
}
</style>
