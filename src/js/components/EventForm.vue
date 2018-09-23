<template>
  <div id="event-form" :class="{ active: active }" :style="{ top: top, left: left }">
    <h4>Add an event</h4>
    <div class="text">
      <input type="text" v-model="description" placeholder="Lunch at Steve's">
      <button @click="create">Create</button>
    </div>
    <button id="close-button" @click="close">&#10005;</button>
  </div>
</template>


<script>
export default {
  name: "EventForm",
  data() {
    return {
      description: ""
    };
  },
  methods: {
    close() {
      this.$store.commit("eventFormActive", false);
    },
    create() {
      if (this.description.length > 0) {
        this.$store.commit("addEvent", this.description);
        this.description = "";
        this.$store.commit("eventFormActive", false);
      }
    }
  },
  computed: {
    active() {
      return this.$store.state.eventFormActive;
    },
    top() {
      return `${this.$store.state.eventFormPosY}px`;
    },
    left() {
      return `${this.$store.state.eventFormPosX}px`;
    }
  }
};
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
  border: 1px black solid;

  &.active {
    display: flex;
  }

  flex-direction: column;
  align-content: space-between;

  #close-button {
    margin: 0;
    padding: 0;
    position: absolute;
    border: none;
    width: 20px;
    height: 20px;
    right: 0.6rem;
    top: 0.6rem;
    &:focus {
      outline: none;
    }
  }
}
</style>
