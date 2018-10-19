<template>
  <div id="event-form" :class="{ active: active }" :style="{ top: top, left: left }">
    <h4>Add an event</h4>
    <p>{{ date.format('dddd, MMM Do') }}</p>
    <div class="text">
      <input type="text" v-focus v-model="description" placeholder="Lunch at Steve's" @keyup.enter="create">
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
    // Close button method for event form.
    close() {
      this.$store.commit("eventFormActive", false);
    },
    // Commit description to Vuex store if length is greater than 0.
    // Then close event form.
    create() {
      if (this.description.length > 0) {
        this.$store.commit("addEvent", this.description);
        this.description = "";
        this.$store.commit("eventFormActive", false);
      }
    }
  },
  computed: {
    // Date event form was created.
    date() {
      return this.$store.state.eventFormDate;
    },
    // Open event form if true, close if false.
    active() {
      return this.$store.state.eventFormActive;
    },
    // Top positioning based on click location.
    top() {
      return `${this.$store.state.eventFormPosY}px`;
    },
    // Left positionioning based on click location.
    left() {
      return `${this.$store.state.eventFormPosX}px`;
    }
  },
  directives: {
    focus: {
      // Update hook: Focus on the input, to prevent user from having to click to type.
      update(el) {
        el.focus();
      }
    }
  }
};
</script>


<style lang='scss'>
#event-form {
  display: none;
  box-shadow: 0 2px 4px #000000;
  position: fixed;
  width: 300px;
  transform: translate(-50%, -100%);
  z-index: 10;
  padding: 1rem;
  background-color: white;
  border: 1px #813638 solid;

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
