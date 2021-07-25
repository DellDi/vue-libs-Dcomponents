<template>
  <div class="demo-box">
    <d-form-item prop="name" label="姓名" :rules="nameRules">
      <d-input v-model="formModel.name" placeholder="请输入姓名"></d-input>
    </d-form-item>
    <d-form-item label="密码" prop="password" :rules="nameRules">
      <d-input v-model="formModel.password" type="password" placeholder="请输入密码"></d-input>
    </d-form-item>
  </div>
</template>
<script lang="tsx">
import { DntRuleItem } from './types';
import { ref, defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'DemoForm',
  setup() {
    const formModel = reactive({
      name: '',
      password: '',
    })
    const nameRules = ref<DntRuleItem | DntRuleItem[]>([
      { required: true, message: '请输入姓名' },
      { trigger: 'blur', max: 6, message: '不能超过6位' }
    ])

    return {
      formModel,
      nameRules,
    }
  }
})
</script>
