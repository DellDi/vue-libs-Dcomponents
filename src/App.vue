<template>
  <demo-form></demo-form>
</template>

<script lang="tsx">
import { defineComponent } from '@vue/runtime-core'
import DemoForm from './components/Form/demo.vue'
export default defineComponent({
  name: 'App',
  components: { DemoForm }
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
