<template>
  <div id="event-form" :class="{ active: isActive }" :style="{ top: top, left: left }">
    <h4>Add an event</h4>
    <button id="close-button" @click="close">&#10005</button>
  </div>
</template>


<script>
export default {
  name: 'EventForm',
  methods: {
    close () {
      this.$store.commit('eventFormActive', false);
    }
  },
  computed: {
    isActive () {
      return this.$store.state.eventFormActive;
    },
    top () {
      return `${this.$store.state.eventFormPosY}px`;
    },
    left () {
      return `${this.$store.state.eventFormPosX}px`;
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
