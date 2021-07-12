<template>
  <div class="demo-box">
    <d-form-item label="姓名">
      <d-input v-model="text"></d-input>
    </d-form-item>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  name: 'FormDemo',
  setup (props, { emit }) {
    const text = ref('')

    return {
      text
    }
  }
}
</script>

<style lang="scss" scoped>
</style>