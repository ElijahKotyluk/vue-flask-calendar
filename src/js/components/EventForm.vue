<template>
  <div id="event-form" :class="{ active: isActive }" :style="{ top: '500px', left: '500px' }"></div>
</template>


<script>
export default {
  name: 'EventForm',
  data () {
    return {
      isActive: true
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
