<template>
  <div>
    <p>text: {{ text }}</p>
    <d-input v-model="text" type="text" placeholder="请输入文字"></d-input>
  </div>
</template>

<script lang="tsx">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'InputDemo',

  setup(props, { emit }) {
    console.log(
      '🚀 ~ file: demo.vue ~ line 17 ~ setup ~ props, { emit }',
      props,
      { emit }
    )
    const text = ref('')
    return {
      text,
    }
  },
})
</script>

<style lang="scss" scoped></style>
