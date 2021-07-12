<template>
  <div>
    <!-- <demo-input></demo-input>
    <br /> -->
    <demo-form ></demo-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import DemoInput from './components/input/demo.vue'
import DemoForm from './components/Form/demo.vue'
export default defineComponent({
  name: 'App',
  components: {
    // DemoInput,
    DemoForm,
  },
})
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
