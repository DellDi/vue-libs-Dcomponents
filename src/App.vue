<template>
  <div>
    <demo-input></demo-input>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DemoInput from './components/input/demo.vue'
export default defineComponent({
  name: 'App',
  components: {
    DemoInput
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
